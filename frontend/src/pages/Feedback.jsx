import { useState } from "react";
import "./Feedback.css";
import { toast } from "react-toastify";

function Feedback() {
  const [feedback, setFeedback] = useState({
    name: "",
    image: "",
    from: "",
    feedback: "",
  })

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const onSubmitData = async (e) => {
    try {
      e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });

    const res_data = await response.json();

    if (response.ok) {
      setFeedback({ name: "", image: "", from: "", feedback: "" });
      toast.success("Send Feedback Successfully!")
    }
    console.log(response);
    } catch (error) {
      console.log('feedback', error)
    }
    
  };

  return (
    <section className="feedback-container">
      <div className="feedback-area">
        <div className="feedback-head">
          <h1>
            Your Valuable
            <span style={{ color: "rgb(241, 174, 50)" }}>Feedback</span>
          </h1>
          <p>We appreceiate your valuable feedback. Give us your feedback by filling the form bellow:


          </p>
        </div>
      </div>
      <div className="feedback-form">
        <div className="feedback-img">
          <img src="images/feedback-img.jpg" alt="Feedback Image" />
        </div>
        <form onSubmit={onSubmitData}>
          <h2>Send Your Feedback</h2>
          <div className="flex">
            <div className="name">
              <p>Your Name :</p>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={feedback.name}
                required
                onChange={handleInputs}
              />
            </div>
            <div className="your-img">
              <p>Your Image :</p>
              <input
                type="file"
                name="image"
                value={feedback.image}
                required
                onChange={handleInputs}
              />
            </div>
          </div>

          <p>You're From :</p>
          <input
            type="text"
            placeholder="Enter your college/institute name"
            name="from"
            value={feedback.from}
            required
            onChange={handleInputs}
          />
          <p>Your Feedback :</p>
          <textarea
            name="feedback"
            value={feedback.feedback}
            id=""
            cols="30"
            rows="7"
            placeholder="Enter Your Feedback"
            required
            style={{ width: "100%", padding: "5px", fontSize: "16px" }}
            onChange={handleInputs}
          ></textarea>
          <br />
          <input type="submit" className="send-btn" value="Send Feedback" />
        </form>
      </div>
    </section>
  );
}

export default Feedback;
