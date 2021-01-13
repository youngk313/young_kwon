import { Component } from 'react';
import './../CSS/style.css';


class Courses extends Component {
    render() {
        return(
            <div>
                 <h1>Courses</h1>
                 <div className="course-wrap">
                    <h3 className="courseHeading">COMP4537</h3>
                    <ul>
                        <li>Lab 1 Hard-Coded Quiz
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Courses