import React, { useState } from 'react';

const Form = () => {
  const [category, setCategory] = useState('');
  const [subcategoriesLevel1, setSubcategoriesLevel1] = useState([]);
  const [subcategoriesLevel2, setSubcategoriesLevel2] = useState([]);
  const [subcategoriesLevel3, setSubcategoriesLevel3] = useState([]);
  const [selectedSubcategoryLevel1, setSelectedSubcategoryLevel1] = useState('');
  const [selectedSubcategoryLevel2, setSelectedSubcategoryLevel2] = useState('');
  const [selectedSubcategoryLevel3, setSelectedSubcategoryLevel3] = useState('');
  const [describeProblem, setDescribeProblem] = useState(false);
  const [problemDescription, setProblemDescription] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategory(category);
    setSubcategoriesLevel1([]);
    setSubcategoriesLevel2([]);
    setSubcategoriesLevel3([]);
    setSelectedSubcategoryLevel1('');
    setSelectedSubcategoryLevel2('');
    setSelectedSubcategoryLevel3('');
    setDescribeProblem(false);
    setProblemDescription('');

    // Set subcategories for level 1 based on the selected category
    switch (category) {
      case 'category1':
        setSubcategoriesLevel1(['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']);
        break;
      case 'category2':
        setSubcategoriesLevel1(['Subcategory 2.1', 'Subcategory 2.2', 'Subcategory 2.3']);
        break;
      case 'category3':
        setSubcategoriesLevel1(['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']);
        break;
      default:
        break;
    }
  };

  const handleSubcategoryLevel1Change = (event) => {
    const subcategoryLevel1 = event.target.value;
    setSelectedSubcategoryLevel1(subcategoryLevel1);
    setSelectedSubcategoryLevel2('');
    setSelectedSubcategoryLevel3('');
    setSubcategoriesLevel2([]);
    setSubcategoriesLevel3([]);
    setDescribeProblem(false);
    setProblemDescription('');

    // Set subcategories for level 2 based on the selected subcategory level 1
    switch (subcategoryLevel1) {
      case 'Subcategory 1.1':
        setSubcategoriesLevel2(['Subcategory 1.1.1', 'Subcategory 1.1.2', 'Subcategory 1.1.3']);
        break;
      case 'Subcategory 1.2':
        setSubcategoriesLevel2(['Subcategory 1.2.1', 'Subcategory 1.2.2', 'Subcategory 1.2.3']);
        break;
      case 'Subcategory 1.3':
        setSubcategoriesLevel2(['Subcategory 1.3.1', 'Subcategory 1.3.2', 'Subcategory 1.3.3']);
        break;
      // Add cases for other subcategories of level 1
      default:
        break;
    }
  };

  const handleSubcategoryLevel2Change = (event) => {
    const subcategoryLevel2 = event.target.value;
    setSelectedSubcategoryLevel2(subcategoryLevel2);
    setSelectedSubcategoryLevel3('');
    setSubcategoriesLevel3([]);
    setDescribeProblem(false);
    setProblemDescription('');

    // Set subcategories for level 3 based on the selected subcategory level 2
    switch (subcategoryLevel2) {
      case 'Subcategory 1.1.1':
        setSubcategoriesLevel3(['Subcategory 1.1.1.1', 'Subcategory 1.1.1.2', 'Subcategory 1.1.1.3']);
        break;
      case 'Subcategory 1.1.2':
        setSubcategoriesLevel3(['Subcategory 1.1.2.1', 'Subcategory 1.1.2.2', 'Subcategory 1.1.2.3']);
        break;
      case 'Subcategory 1.1.3':
        setSubcategoriesLevel3(['Subcategory 1.1.3.1', 'Subcategory 1.1.3.2', 'Subcategory 1.1.3.3']);
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
    const describeProblem = event.target.value === 'yes';
    setDescribeProblem(describeProblem);

    // Clear the problem description if the user selects "No"
    if (!describeProblem) {
      setProblemDescription('');
    }
  };

  const handleProblemDescriptionChange = (event) => {
    const problemDescription = event.target.value;
    setProblemDescription(problemDescription);
  };

  const handleSubmit = () => {
    // Prepare the data to be sent to the server
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
    setCategory('');
    setSubcategoriesLevel1([]);
    setSubcategoriesLevel2([]);
    setSubcategoriesLevel3([]);
    setSelectedSubcategoryLevel1('');
    setSelectedSubcategoryLevel2('');
    setSelectedSubcategoryLevel3('');
    setDescribeProblem(false);
    setProblemDescription('');
  };

  return (
    <div>
      <h1>Form</h1>

      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </label>

      <label>
        Subcategory Level 1:
        <select
          disabled={!category}
          value={selectedSubcategoryLevel1}
          onChange={handleSubcategoryLevel1Change}
        >
          <option value="">Select a subcategory</option>
          {subcategoriesLevel1.map((subcategory) => (
            <option key={subcategory} value={subcategory} disabled={!category}>
              {subcategory}
            </option>
          ))}
        </select>
      </label>

      <label>
        Subcategory Level 2:
        <select
          disabled={!selectedSubcategoryLevel1}
          value={selectedSubcategoryLevel2}
          onChange={handleSubcategoryLevel2Change}
        >
          <option value="">Select a subcategory</option>
          {subcategoriesLevel2.map((subcategory) => (
            <option key={subcategory} value={subcategory} disabled={!selectedSubcategoryLevel1}>
              {subcategory}
            </option>
          ))}
        </select>
      </label>

      <label>
        Subcategory Level 3:
        <select
          disabled={!selectedSubcategoryLevel2}
          value={selectedSubcategoryLevel3}
          onChange={handleSubcategoryLevel3Change}
        >
          <option value="">Select a subcategory</option>
          {subcategoriesLevel3.map((subcategory) => (
            <option key={subcategory} value={subcategory} disabled={!selectedSubcategoryLevel2}>
              {subcategory}
            </option>
          ))}
        </select>
      </label>

      <label>
        Do you want to describe a problem?
        <select value={describeProblem ? 'yes' : 'no'} onChange={handleDescribeProblemChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>

      {describeProblem && (
        <label>
          Problem Description:
          <textarea
            value={problemDescription}
            onChange={handleProblemDescriptionChange}
          ></textarea>
        </label>
      )}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
