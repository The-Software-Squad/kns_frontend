import Link from 'next/link'

export default function SecondaryNavbar() {


    return (
        <div className='hidden md:block md:flex gap-8 items-center justify-center py-3'>
            <Link href="/" className='hover:text-orange-800'>Vegetable Plants</Link>
            <Link href="/" className='hover:text-orange-800'>Flower Plants</Link>
            <Link href="/" className='hover:text-orange-800'>Air Purifying Plants</Link>    
        </div>
    )
}