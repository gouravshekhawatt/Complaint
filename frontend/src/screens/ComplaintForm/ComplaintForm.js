import React from "react";
import "./ComplaintForm.css";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loader/Loading";

import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNoteAction } from "../../actions/notesActions";

function ComplaintForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [division, setdivision] = useState("");
  const [myid, setmyid] = useState("");

  const [number, setNumber] = useState("");

  const [message, setMessage] = useState(null);











  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading,error, note} = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setEmail("");
setName("");
setlocation("");
setdivision("");
setmyid("");
setNumber("");

  } 



 
  const navigate = useNavigate();



  const submitHandler = (e) => {
    e.preventDefault();


    dispatch(createNoteAction(name,email,division,location))
    resetHandler();


    navigate("/ViewComplaints")
    //////categories/////

    const data = {
      category: category,
      subcategoriesLevel1: selectedSubcategoryLevel1,
      subcategoriesLevel2: selectedSubcategoryLevel2,
      subcategoriesLevel3: selectedSubcategoryLevel3,
      describeProblem: describeProblem,
      problemDescription: problemDescription,
    };

    
    // Send the data to the server-side component
    // ...

    // Reset the form state after submission
    setCategory("");
    setSubcategoriesLevel1([]);
    setSubcategoriesLevel2([]);
    setSubcategoriesLevel3([]);
    setSelectedSubcategoryLevel1("");
    setSelectedSubcategoryLevel2("");
    setSelectedSubcategoryLevel3("");
    setDescribeProblem(false);
    setProblemDescription("");




  };

  ////////////////////////////////////

  const [category, setCategory] = useState("");
  const [subcategoriesLevel1, setSubcategoriesLevel1] = useState([]);
  const [subcategoriesLevel2, setSubcategoriesLevel2] = useState([]);
  const [subcategoriesLevel3, setSubcategoriesLevel3] = useState([]);
  const [selectedSubcategoryLevel1, setSelectedSubcategoryLevel1] =
    useState("");
  const [selectedSubcategoryLevel2, setSelectedSubcategoryLevel2] =
    useState("");
  const [selectedSubcategoryLevel3, setSelectedSubcategoryLevel3] =
    useState("");
  const [describeProblem, setDescribeProblem] = useState(false);
  const [problemDescription, setProblemDescription] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategory(category);
    setSubcategoriesLevel1([]);
    setSubcategoriesLevel2([]);
    setSubcategoriesLevel3([]);
    setSelectedSubcategoryLevel1("");
    setSelectedSubcategoryLevel2("");
    setSelectedSubcategoryLevel3("");
    setDescribeProblem(false);
    setProblemDescription("");

    // Set subcategories for level 1 based on the selected category
    switch (category) {
      case "category1":
        setSubcategoriesLevel1([
          "Subcategory 1.1",
          "Subcategory 1.2",
          "Subcategory 1.3",
        ]);
        break;
      case "category2":
        setSubcategoriesLevel1([
          "Subcategory 2.1",
          "Subcategory 2.2",
          "Subcategory 2.3",
        ]);
        break;
      case "category3":
        setSubcategoriesLevel1([
          "Subcategory 3.1",
          "Subcategory 3.2",
          "Subcategory 3.3",
        ]);
        break;
      default:
        break;
    }
  };

  const handleSubcategoryLevel1Change = (event) => {
    const subcategoryLevel1 = event.target.value;
    setSelectedSubcategoryLevel1(subcategoryLevel1);
    setSelectedSubcategoryLevel2("");
    setSelectedSubcategoryLevel3("");
    setSubcategoriesLevel2([]);
    setSubcategoriesLevel3([]);
    setDescribeProblem(false);
    setProblemDescription("");

    // Set subcategories for level 2 based on the selected subcategory level 1
    switch (subcategoryLevel1) {
      case "Subcategory 1.1":
        setSubcategoriesLevel2([
          "Subcategory 1.1.1",
          "Subcategory 1.1.2",
          "Subcategory 1.1.3",
        ]);
        break;
      case "Subcategory 1.2":
        setSubcategoriesLevel2([
          "Subcategory 1.2.1",
          "Subcategory 1.2.2",
          "Subcategory 1.2.3",
        ]);
        break;
      case "Subcategory 1.3":
        setSubcategoriesLevel2([
          "Subcategory 1.3.1",
          "Subcategory 1.3.2",
          "Subcategory 1.3.3",
        ]);
        break;
      // Add cases for other subcategories of level 1
      default:
        break;
    }
  };

  const handleSubcategoryLevel2Change = (event) => {
    const subcategoryLevel2 = event.target.value;
    setSelectedSubcategoryLevel2(subcategoryLevel2);
    setSelectedSubcategoryLevel3("");
    setSubcategoriesLevel3([]);
    setDescribeProblem(false);
    setProblemDescription("");

    // Set subcategories for level 3 based on the selected subcategory level 2
    switch (subcategoryLevel2) {
      case "Subcategory 1.1.1":
        setSubcategoriesLevel3([
          "Subcategory 1.1.1.1",
          "Subcategory 1.1.1.2",
          "Subcategory 1.1.1.3",
        ]);
        break;
      case "Subcategory 1.1.2":
        setSubcategoriesLevel3([
          "Subcategory 1.1.2.1",
          "Subcategory 1.1.2.2",
          "Subcategory 1.1.2.3",
        ]);
        break;
      case "Subcategory 1.1.3":
        setSubcategoriesLevel3([
          "Subcategory 1.1.3.1",
          "Subcategory 1.1.3.2",
          "Subcategory 1.1.3.3",
        ]);
        break;
      // Add cases for other subcategories of level 2
      default:
        break;
    }
  };

  const handleSubcategoryLevel3Change = (event) => {
    const subcategoryLevel3 = event.target.value;
    setSelectedSubcategoryLevel3(subcategoryLevel3);
  };

  const handleDescribeProblemChange = (event) => {
    const describeProblem = event.target.value === "yes";
    setDescribeProblem(describeProblem);

    // Clear the problem description if the user selects "No"
    if (!describeProblem) {
      setProblemDescription("");
    }
  };

  const handleProblemDescriptionChange = (event) => {
    const problemDescription = event.target.value;
    setProblemDescription(problemDescription);
  };













 


  return (
    <div className="complaintform">
      <Header />
      <div className="complaintform-block">
        <div className="complaintform-container">
          {loading && <Loading />}
          <div className="complaintform-title">File Complaint</div>
          {message && <ErrorMessage message={message} />}
          <div className="complaintform-content">
            <form onSubmit={submitHandler}>
              <div className="complaintform-user-details">
                <div className="complaintform-input-box">
                  <span className="complaintform-details">Full Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="complaintform-input-box">
                  <span className="complaintform-details">UserId</span>
                  <input
                    type="text"
                    value={myid}
                    onChange={(e) => setmyid(e.target.value)}
                    placeholder="Enter your UserId"
                    required
                  />
                </div>
                <div className="complaintform-input-box">
                  <span className="complaintform-details">Email</span>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="complaintform-input-box">
                  <span className="complaintform-details">Phone Number</span>

                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div className="complaintform-input-box">
                  <span className="complaintform-details">
                    Name Of Division
                  </span>
                  <input
                    type="text"
                    value={division}
                    onChange={(e) => setdivision(e.target.value)}
                    placeholder="Enter your Division"
                    required
                  />
                </div>
                <div className="complaintform-input-box">
                  <span className="complaintform-details">Location</span>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                    placeholder="Enter your Location"
                    required
                  />
                </div>

                <div>
                  <div className="complaintform-input-box">
                    <span className="complaintform-details">Category:</span>
                    <select value={category} onChange={handleCategoryChange}>
                      <option value="">Select a category</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </select>
                  </div>

                  <div className="complaintform-input-box">
                    <span className="complaintform-details">
                      Subcategory Level 1:
                    </span>
                    <select
                      disabled={!category}
                      value={selectedSubcategoryLevel1}
                      onChange={handleSubcategoryLevel1Change}
                    >
                      <option value="">Select a subcategory</option>
                      {subcategoriesLevel1.map((subcategory) => (
                        <option
                          key={subcategory}
                          value={subcategory}
                          disabled={!category}
                        >
                          {subcategory}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="complaintform-input-box">
                    <span className="complaintform-details">
                      Subcategory Level 2:
                    </span>
                    <select
                      disabled={!selectedSubcategoryLevel1}
                      value={selectedSubcategoryLevel2}
                      onChange={handleSubcategoryLevel2Change}
                    >
                      <option value="">Select a subcategory</option>
                      {subcategoriesLevel2.map((subcategory) => (
                        <option
                          key={subcategory}
                          value={subcategory}
                          disabled={!selectedSubcategoryLevel1}
                        >
                          {subcategory}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="complaintform-input-box">
                    <span className="complaintform-details">
                      Subcategory Level 3:
                    </span>
                    <select
                      disabled={!selectedSubcategoryLevel2}
                      value={selectedSubcategoryLevel3}
                      onChange={handleSubcategoryLevel3Change}
                    >
                      <option value="">Select a subcategory</option>
                      {subcategoriesLevel3.map((subcategory) => (
                        <option
                          key={subcategory}
                          value={subcategory}
                          disabled={!selectedSubcategoryLevel2}
                        >
                          {subcategory}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="complaintform-input-box">
                    <span className="complaintform-details">
                      Do you want to describe a problem?
                    </span>

                    <select
                      value={describeProblem ? "yes" : "no"}
                      onChange={handleDescribeProblemChange}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {describeProblem && (
                    <div className="complaintform-input-box">
                      <span className="complaintform-details">
                        Problem Description:
                      </span>

                      <textarea
                        value={problemDescription}
                        onChange={handleProblemDescriptionChange}
                      ></textarea>
                    </div>
                  )}

                  























                  {/* any further form questions above this */}
                </div>
              </div>

              <div className="complaintform-button">
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;
