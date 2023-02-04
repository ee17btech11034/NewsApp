import loading from '../Images/loading.gif'

const Spinner =()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Spinner