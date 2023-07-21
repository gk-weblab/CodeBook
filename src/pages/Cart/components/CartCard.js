import { Link } from "react-router-dom";
import { useCart } from "../../../context";
import { Rating } from "../../../components";
export const CartCard = ({ product, quantity }) => {
	const { removeFromCart, removeOneFromCart, addToCart } = useCart();

	const { name, poster, price, rating } = product;

	return (
		/*
		<div className='flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 '>
			<div className='flex'>
				<Link to=''>
					<img className='w-32 rounded' src={poster} alt={name} />
				</Link>
				<div className=''>
					<Link to=''>
						<p className='text-lg ml-2 dark:text-slate-200'>{name}</p>
					</Link>
					<button onClick={() => removeFromCart(product)} className='text-base ml-2 text-red-400'>
						Remove
					</button>
				</div>
				
			</div>
			<div className='text-lg font-saira m-2 dark:text-slate-200 flex flex-column justify-around'>
				<span className='mr-3 '>
					Quantity: <span className='text-bold'>{quantity}</span>
				</span>
				<span className='mr-3 '>
					Price: <span className='text-bold'>${price}</span>
				</span>
        <div className='flex self-center items-center gap-3'>
					<button onClick={() => removeOneFromCart(product)} className='border border-solid rounded-md text-4xl ml-2 hover:text-rose-400'>
						{" "}
						-{" "}
					</button>
					<span className='text-bold'>{quantity}</span>
					<button onClick={() => addToCart(product)} className='text-2xl m-2 hover:text-emerald-400'>
						+
					</button>
				</div>
			</div>
		</div>
    
    */

		<>
			<div className='flex py-6 border border-solid rounded-sm px-4'>
				<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
					<img
						src={poster}
						alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
						className='h-full w-full object-cover object-center'
					/>
				</div>

				<div className='ml-4 flex flex-1 flex-col'>
					<div>
						<div className='flex justify-between  text-xl font-semithin text-gray-900 dark:text-gray-100'>
							<h3>
								<Link to='#'>{name}</Link>
							</h3>
							<div className='flex'>
								<button
									onClick={() => removeFromCart(product)}
									type='button'
									className='font-medium text-indigo-600 hover:text-indigo-500'>
									Remove
								</button>
							</div>
						</div>
						<p className='mt-2 text-sm text-gray-500'>
							<Rating rating={rating} />
						</p>
					</div>
					<div className='flex flex-1 items-end justify-between text-sm'>
						<div className='gap-6 items-end flex font-saira text-lg dark:text-gray-100 text-gray-700'>
							<div className='flex gap-6  py-3'>
								<div className='flex gap-3'>
									<p className=''>Qty:</p>

									<div className='border-2 border-solid border-slate-500 rounded-md flex'>
										<button
											onClick={() => addToCart(product)}
											type='button'
											className='flex items-center justify-center p-3'>
											<span className='bg-gray-500 w-3 h-0.5  dark:bg-gray-100'></span>
											<span className='absolute top-center left-center dark:bg-gray-100 bg-gray-500 w-0.5 h-3 '></span>
										</button>
										<span className='text-xl w-8 text-center text-emerald-600'>{quantity}</span>
										<button
											onClick={() => removeOneFromCart(product)}
											type='button'
											className='flex items-center justify-center p-3'>
											<span className='bg-gray-500 hover:bg-rose-300 dark:bg-gray-100 w-3 h-0.5 '></span>
										</button>
									</div>
								</div>
								<p className=''>
									Price:&nbsp; <span className='text-xl text-emerald-600 '>${price * quantity}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
