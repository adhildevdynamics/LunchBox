import React from 'react'
import './QuoteSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from  '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from  '@fortawesome/free-solid-svg-icons';

function QuoteSection() {
  return (
    <div className='section quote'>
        <div className='quote-text'>
            <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Dining with one's friends and beloved family is certainly one of life's primal and most innocent delights on that is both satisfying and eternal   <FontAwesomeIcon icon={faQuoteRight}/></p>
            <p className='quote-author'>-Julia Child</p>
            <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Food is symbolic of love when words are inadequate  <FontAwesomeIcon icon={faQuoteRight}/></p>
            <p className='quote-author'>-Alan D. Wolfelt</p>
        </div>

    </div>
  )
}

export default QuoteSection