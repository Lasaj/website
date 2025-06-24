import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="site-header">
            <h1>Rick's Website</h1>
            <nav>
                <ul>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/gallery">gallery</Link></li>
                    <li><Link href="/about">about me</Link></li>
                    <li><Link href="/contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}