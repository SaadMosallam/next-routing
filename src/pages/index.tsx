import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('placing your order');
    router.push('/product');
  }
  return (
    <>
    <h1>Next.js Routing</h1>
    <Link href="/blog">Blog</Link>
    <br />
    <Link href="/product">Products</Link>
    <br />
    <button onClick={handleClick}>Place Order</button>
    </>

  )
}
