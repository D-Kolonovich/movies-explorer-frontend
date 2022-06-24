import './SearchForm.css';

function SearchForm() {
    return (
        <section className='searchForm'>
            <form className='searchForm__form'>
                <div className='searchForm__form-wrapper'>
                    <input className='searchForm__input' type='text' placeholder='Фильм' required></input>
                    <button className='searchForm__button' type='submit'></button>
                </div>
                <div className='searchForm-wrapper'>
                    <label className="searchForm-checkbox">
                        <input type="checkbox" className="searchForm-checkbox__input"></input>
                        <span className="searchForm-checkbox__slider white-circle"></span>
                        <p className='searchForm-checkbox__text'>Короткометражки</p>
                    </label>
                </div>
            </form>
        </section>
        
    );
  }
  
  export default SearchForm;