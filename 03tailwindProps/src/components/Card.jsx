
import PropTypes from 'prop-types';

function Card( {userName, Text= "visit me"}){
    return (
            
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/28712681/pexels-photo-28712681/free-photo-of-serene-sunset-over-power-lines-in-catalca.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{userName}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Text}</p>
    </div>
</a>

    );
}
Card.propTypes = {
    userName: PropTypes.string.isRequired,
    Text: PropTypes.string
};

 
export default Card;