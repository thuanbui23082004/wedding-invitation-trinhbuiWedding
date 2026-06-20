"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Wish {
    id: string;
    name: string;
    message: string;
    createdAt: number;
}

const STORAGE_KEY = "wedding_guestbook_wishes";
const ITEMS_PER_PAGE = 3;

export default function GuestbookForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(wishes.length / ITEMS_PER_PAGE));
    const visibleWishes = wishes.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
    );

    useEffect(() => {
        fetch("/api/guestbook")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setWishes(data);
                }
            })
            .catch(() => {
                // ignore lỗi fetch
            });
    }, []);

    useEffect(() => {
        setCurrentPage((page) => Math.min(page, totalPages));
    }, [totalPages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        setSubmitting(true);

        const res = await fetch("/api/guestbook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.trim(),
                message: message.trim(),
            }),
        });

        const data = await res.json();
        setSubmitting(false);

        if (!res.ok) {
            return;
        }

        setWishes((prev) => [data, ...prev]);
        setName("");
        setMessage("");
    };

    return (
        <section className="relative bg-transparent bg-damask px-5 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="font-serif text-lg font-semibold tracking-[0.1em] text-gold-100 sm:text-xl">
                    SỔ LƯU BÚT
                </h2>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="mx-auto mt-6 max-w-sm rounded-2xl border border-gold/40 bg-black/10 p-5"
            >
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên của bạn*"
                    className="mb-3 w-full rounded-lg border border-gold/40 bg-transparent px-4 py-2.5 font-body text-sm text-gold-100"
                />
                <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập lời chúc của bạn*"
                    rows={3}
                    className="mb-4 w-full resize-none rounded-lg border border-gold/40 bg-transparent px-4 py-2.5 font-body text-sm text-gold-100"
                />
                <button
                    type="submit"
                    disabled={submitting}
                    className="mx-auto block rounded-full bg-gradient-to-r from-orange-300 to-orange-400 px-8 py-2.5 font-serif text-sm font-semibold tracking-[0.1em] text-wine-800 shadow-md transition hover:brightness-105 disabled:opacity-60"
                    style={{ fontFamily: '"Baskerville", serif' }}
                >
                    GỬI LỜI CHÚC
                </button>
            </motion.form>

            <div className="mx-auto mt-8 max-w-sm">
                <AnimatePresence mode="popLayout">
                    {wishes.length === 0 ? (
                        <motion.p
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center font-body text-sm italic text-gold-200/60"
                        >
                            Chưa có lời chúc nào. Hãy là người đầu tiên!
                        </motion.p>
                    ) : (
                        <div>
                            <ul className="space-y-3">
                                {visibleWishes.map((wish) => (
                                    <motion.li
                                        key={wish.id}
                                        layout
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="rounded-xl border border-gold/30 bg-black/10 p-4"
                                    >
                                        <p className="font-serif text-sm font-semibold text-gold-100">
                                            {wish.name}
                                        </p>
                                        <p className="mt-1 font-body text-sm text-gold-200/80">
                                            {wish.message}
                                        </p>
                                    </motion.li>
                                ))}
                            </ul>

                            {totalPages > 1 && (
                                <div className="mt-5 flex items-center justify-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCurrentPage((page) =>
                                                Math.max(1, page - 1),
                                            )
                                        }
                                        disabled={currentPage === 1}
                                        className="h-9 rounded-full border border-gold/50 px-4 font-body text-xs text-gold-100 transition hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-40"
                                        style={{
                                            fontFamily: '"Baskerville", serif',
                                        }}
                                    >
                                        Trước
                                    </button>
                                    <span
                                        className="font-body text-xs text-gold-200/70"
                                        style={{
                                            fontFamily: '"Baskerville", serif',
                                        }}
                                    >
                                        {currentPage} / {totalPages}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCurrentPage((page) =>
                                                Math.min(totalPages, page + 1),
                                            )
                                        }
                                        disabled={currentPage === totalPages}
                                        className="h-9 rounded-full border border-gold/50 px-4 font-body text-xs text-gold-100 transition hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-40"
                                        style={{
                                            fontFamily: '"Baskerville", serif',
                                        }}
                                    >
                                        Sau
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
