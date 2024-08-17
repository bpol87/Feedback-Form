import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import axios from "axios";

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();

  const a = useSelector((store) => store.feeling);
  const b = useSelector((store) => store.understanding);
  const c = useSelector((store) => store.support);
  const d = useSelector((store) => store.comments);

  const handleClick = () => {
    sendFeedback();
    resetStore();
    history.push("/thank");
  };
  const sendFeedback = () => {
    let feedbackToSend = { a, b, c, d };
    axios({
      method: "POST",
      url: "/api/feedback",
      data: feedbackToSend,
    })
      .then((response) => {
        resetStore();
      })
      .catch((err) => {
        console.log("error on POST", err);
        alert("There was an error sending the data to the database");
      });
  };

  const resetStore = () => {
    dispatch({
      type: "RESET_STORE",
    });
  };

  return (
    <div>
      f
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Review Your Feedback
        </h2>
        <table>
          <thead>
            <tr>
              <th>Feedback</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{a}</td>
              <td>{b}</td>
              <td>{c}</td>
              <td>{d}</td>
            </tr>
          </tbody>
        </table>
        <button
          data-testid="next"
          onClick={handleClick}
          className=" flex flex-row items-center justify-end w-32 border-2 border-slate-400 bg-slate-400 hover:bg-slate-200 rounded-full drop-shadow-lg"
        >
          Next <ArrowRightIcon className="w-6 ml-3 mr-2" />
        </button>
      </div>
    </div>
  );
}

export default Review;
