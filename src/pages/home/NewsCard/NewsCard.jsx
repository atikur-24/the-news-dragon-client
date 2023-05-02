import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const { _id, title, image_url, details, author, rating, total_view } = news;

    return (
        <>
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{height: '40px', width: '40px'}} src={author?.img} roundedCircle />
                <div className='flex-grow-1 ms-3 pt-3'>
                    <p className='text-dark fw-semibold mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <span  className='me-3'> <FaRegBookmark style={{height: '24px'}} /> </span>
                <span> <FaShareAlt style={{height: '24px'}} /> </span>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Img className='my-3' variant="top" src={image_url} />
                <Card.Text className='text-secondary lh-lg'>
                {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`} className='text-decoration-none my-color icon-link font-500'>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                <Rating
                    className='my-color'
                    placeholderRating={rating.number}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                />
                <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
        </>
    );
};

export default NewsCard;