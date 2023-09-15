'use client';
export default function Error({ reset }) {
  return (
    <div className='error-page'>
        <h2>Something went wrong!</h2>
        <small>
            Maybe iy due to bad connections!
            <span className='gradient-text'> Please be patitent </span>
            requests.
        </small>
        <button onClick={ () => reset() }>Try again</button>
    </div>
  );
};