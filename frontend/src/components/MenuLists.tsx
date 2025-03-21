import { useQuery } from '@tanstack/react-query';
import BgImg from '../assets/header-two.png';
import axios from 'axios';
import { baseUrl } from '../lib/baseUrl';
import { IMenu } from '../lib/type';
import { useLocation, useNavigate } from 'react-router';
import { Button } from './ui/button';

function MenuLists() {
    const navigate = useNavigate();
    const location = useLocation();

    const { data } = useQuery({
        queryKey: ["allMenu"],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/menu`);
            return res.data;
        }
    });

    const handleClick = (item: string) => {
        const params = new URLSearchParams(location.search);
        params.set('title', encodeURIComponent(item));
        navigate(`${location.pathname}?${params.toString()}`);
    };

    return (
        <main className='min-h-20 flex flex-row gap-3 flex-wrap justify-center items-center' style={{ backgroundImage: `url(${BgImg})` }}>
            {data?.length ? (
                data.map((item: IMenu, index: number) => (
                    <Button
                        key={index}
                        onClick={() => handleClick(item.title)}
                        className='bg-black border border-blue-800 rounded-none px-6 uppercase'
                    >
                        {item.title}
                    </Button>
                ))
            ) : (
                <p className='text-red-500'>No menu items available</p>
            )}
        </main>
    );
}

export default MenuLists;
