import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('https://stormy-plains-26756.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Users;