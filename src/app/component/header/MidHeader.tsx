"use client";
import React, { useState } from 'react';
import { User, UserCircle, UserPlus, UserCheck, UserX, Lock, LogIn, ChevronDown, LockKeyhole, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MidHeader = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = [
        {
            title: 'COLLECTIONS',
            color: 'text-red-500',
            isDropdown: true,
            content: {
                columns: [
                    {
                        title: 'TOWELS CLOUD',
                        items: [
                            'Appliances',
                            'Furniture & Decors',
                            'Lamp & Lighting',
                            'Punge nenune',
                            'Qunge genga',
                            'Sofa & Chairs'
                        ]
                    },
                    {
                        title: 'FURNITURES',
                        items: [
                            'Bathroom',
                            'Bedroom',
                            'Decor',
                            'Furniture',
                            'Living room',
                            'Theid cupensq'
                        ]
                    },
                    {
                        title: 'COLLECTIONS',
                        items: [
                            'Appliances',
                            'Fashion',
                            'Furniture & Decor',
                            'Sine engain',
                            'Smartphone',
                            'Sport bikes'
                        ]
                    },
                    {
                        title: 'SMARTPHONE',
                        items: [
                            { name: 'Apple', color: 'text-red-500' },
                            'Dell',
                            'Esdipriscing',
                            'Scanners',
                            'Sony',
                            'Toshiba'
                        ]
                    }
                ]
            }
        },
        {
            title: 'SHOP',
            color: 'text-white',
            isDropdown: true,
            content: {
                columns: [
                    {
                        title: 'CATEGORIES',
                        items: [
                            'Electronics',
                            'Clothing',
                            'Home & Garden',
                            'Sports',
                            'Books',
                            'Toys & Games'
                        ]
                    },
                    {
                        title: 'CATEGORIES',
                        items: [
                            'Electronics',
                            'Clothing',
                            'Home & Garden',
                            'Sports',
                            'Books',
                            'Toys & Games'
                        ]
                    },
                    {
                        title: 'CATEGORIES',
                        items: [
                            'Electronics',
                            'Clothing',
                            'Home & Garden',
                            'Sports',
                            'Books',
                            'Toys & Games'
                        ]
                    },
                    {
                        title: 'BRANDS',
                        items: [
                            'Samsung',
                            'Nike',
                            'Apple',
                            'Sony',
                            'LG',
                            'Adidas'
                        ]
                    }
                ]
            }
        },
        {
            title: 'BLOG',
            color: 'text-white',
            isDropdown: false
        },
        {
            title: 'PAGES',
            color: 'text-white',
            isDropdown: true,
            content: {
                columns: [
                    {
                        title: 'COMPANY',
                        items: [
                            'About Us',
                            'Contact',
                            'Careers',
                            'Privacy Policy',
                            'Terms of Service'
                        ]
                    }
                ]
            }
        },
        {
            title: 'MARKETPLACE',
            color: 'text-white',
            isDropdown: true,
            content: {
                columns: [
                    {
                        title: 'SELL',
                        items: [
                            'Start Selling',
                            'Seller Dashboard',
                            'Pricing',
                            'Tools',
                            'Analytics'
                        ]
                    }

                ]
            }
        }
    ];

    const handleMouseEnter = (index) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className="bg-gray-800 text-white py-[8px]">
            <div className="mx-auto max-w-7xl md:px-0 px-4">
                <nav className="relative">
                    <div className="grid grid-cols-10">
                        <div className="col-span-2">
                            <div className="">
                                <Image src="/logo.png" className='w-[150px]' alt='log' width={800} height={800} />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="flex items-center justify-between px-2 py-4">
                                <div className="flex space-x-4">
                                    {menuItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="relative"
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <button
                                                className={`flex items-center  hover:text-red-400 transition-colors duration-200 ${item.color} font-semibold text-[14px] uppercase px-[15px]`}
                                            >
                                                <span>{item.title}</span>
                                                {item.isDropdown && (
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transform transition-transform duration-200 ${activeMenu === index ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                )}
                                            </button>

                                            {/* Mega Menu Dropdown */}
                                            {item.isDropdown && activeMenu === index && (
                                                <div className="absolute top-full left-0 w-[800px] bg-white text-gray-800 shadow-2xl border-t-4 border-red-500 z-50">
                                                    <div className="max-w-7xl mx-auto px-6 py-8">
                                                        <div className={`grid grid-cols-${item.content.columns.length} gap-8`}>
                                                            {item.content.columns.map((column, colIndex) => (
                                                                <div key={colIndex} className="space-y-4">
                                                                    <h3 className="font-bold text-gray-900 text-md border-b border-gray-200 pb-2">
                                                                        {column.title}
                                                                    </h3>
                                                                    <ul className="space-y-2">
                                                                        {column.items.map((item, itemIndex) => (
                                                                            <li key={itemIndex}>
                                                                                <a
                                                                                    href="#"
                                                                                    className={`block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-150 ${typeof item === 'object' ? item.color : 'text-gray-700'
                                                                                        } hover:text-red-600`}
                                                                                >
                                                                                    {typeof item === 'object' ? item.name : item}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 justify-end flex items-center">
                            <div className="login-form flex justify-end">

                                <div className="relative borderRight flex items-center">
                                    <LockKeyhole size={14} />
                                    <Link href={""} className='ml-1'>Login</Link> <span className='px-2'> or </span> <Link href="/register"> Register</Link>


                                </div>
                                <div className="relative ml-5  flex items-center">
                                    <PhoneCall size={14} />
                                    <Link href={""} className='mx-1'>Hotline</Link> <Link href="tel:90909"> (+123) 4 567 890</Link>


                                </div>


                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MidHeader;