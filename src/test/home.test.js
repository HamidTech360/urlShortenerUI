import {screen, render} from '@testing-library/react'
import Home from '../pages/home/home'
import axios from 'axios'

describe('Home component', ()=>{
    it('should render the application landing UI', ()=>{
        render (<Home/>)
        expect(screen.getByText('URL SHORTENER')).toBeTruthy
    })
})