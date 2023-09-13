import Link from 'next/link'

export default function SecondaryNavbar() {


    return (
        <div className='flex gap-8 items-center justify-center py-3'>
            <Link href="/">Vegetable Plants</Link>
            <Link href="/">Flower Plants</Link>
            <Link href="/">Air Purifying Plants</Link>    
        </div>
    )
}