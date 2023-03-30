import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Category() {
    const navigate = useNavigate();

    useEffect(() => {
        swal({
            title: 'Thông Báo !!!',
            text: 'Chức năng đang phát triển...',
            icon: 'warning',
            buttons: 'Oki ^^!',
        });
        navigate('..');
    }, []);
    return <h3>Category Pages</h3>;
}

export default Category;
