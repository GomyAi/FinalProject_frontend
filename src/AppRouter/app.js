/* eslint-disable react/react-in-jsx-scope */
import react from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from  '../pages/HomePage/HomePage'

export function appRouter (props) {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Router>
            <Route path ='/' exact component = {HomePage} />
        </Router>
    )
}
export default appRouter