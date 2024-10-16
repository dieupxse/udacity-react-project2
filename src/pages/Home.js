import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "../components/Question";
const HomePage = (props) => {
    const [newQuestions, setNewQuestions] = useState([]);
    const [doneQuestions, setDoneQuestions] = useState([]);
    const authedId = useSelector(state => state.auth.authedId);
    // const authedUser = useSelector(state => state.auth.authedUser);
    const users = useSelector(state => state.user.users);
    const questions = useSelector(state => state.question.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        if(questions) {
            let newQ = [];
            let doneQ = [];
            Object.keys(questions).forEach((key) => {
                let q = {...questions[key]};
                q.user = users[q.author];
                if (q.optionOne.votes.indexOf(authedId) < 0 && q.optionTwo.votes.indexOf(authedId) <0) {
                    newQ.push(q);
                } else {
                    doneQ.push(q);
                }
            })
            setNewQuestions(newQ.sort((a, b) => b.timestamp - a.timestamp));
            setDoneQuestions(doneQ.sort((a, b) => b.timestamp - a.timestamp));
        }

    }, [dispatch, authedId, users, questions])

    return (<div className="home-page">
                <h1 className="text-center mb-3">New Questions</h1>
                <div className="row mb-3">
                {
                    newQuestions && newQuestions.map(q => (
                        <div className="col-md-4" key={q.id}>
                            <Question question={q} />
                        </div>
                    ))
                }
                </div>
                <hr className="mt-3"/>
                <h1 className="text-center mb-3">Done</h1>
                <div className="row">
                {
                    doneQuestions && doneQuestions.map(q => (
                        <div className="col-md-4" key={q.id}>
                            <Question question={q} />
                        </div>
                    ))
                }
                </div>
            </div>
            )
}
export default HomePage