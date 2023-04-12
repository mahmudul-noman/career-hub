import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: 'green',
                            color: 'white'
                        },
                    },
                    error: {
                        style: {
                            background: 'red',
                            color: 'white'
                        },
                    },
                }}
            />
        </div>
    );
};

export default Main;