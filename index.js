class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class='app_header'>
            <h1>WholeFoods, Jhang</h1>
            <p>138 Iqbal Road, Jhang, Pakistan +92-333-555-1212 wholefoods@wfj.com</p>
            </div>
            <br>
            <br>

        `;
  }
}
window.customElements.define("app-header", AppHeader);

// Exercise 1
// ● Create a user interface that offers a button labeled “Display Inventory”.
// ● Upon pressing that button, the solution should display the stock levels of 
// WholeFoods current inventory. 
// ● Since we are not creating database tables, create an array to manage 
// the following products and their stock levels.

const arrINV = [
  {
    ID: "FG001",
    name: "Apple",
    dscp: "Delicious Red Apples",
    CID: "FRUIT",
    cDscp: "Fresh Fruit",
    qty: 100,
    UOM: "DZ",
    upr: 300,
    curr: "PKR",
  },
  {
    ID: "FG002",
    name: "Bananas",
    dscp: "Nice Yellow Bananas",
    CID: "FRUIT",
    cDscp: "Fresh Fruit",
    qty: 200,
    UOM: "DZ",
    upr: 100,
    curr: "PKR",
  },
  {
    ID: "FG003",
    name: "Almonds",
    dscp: "Dry Roasted Almonds",
    CID: "DRYNF",
    cDscp: "Dry Nuts & Fruit",
    qty: 440,
    UOM: "KG",
    upr: 3000,
    curr: "PKR",
  },
  {
    ID: "FG004",
    name: "Pine Nuts",
    dscp: "Afghani Chilghoza",
    CID: "DRYNF",
    cDscp: "Dry Nuts & Fruit",
    qty: 259,
    UOM: "KG",
    upr: 9000,
    curr: "PKR",
  },
  {
    ID: "FG005",
    name: "Raisins",
    dscp: "Sweet Dark Kishmish",
    CID: "DRYNF",
    cDscp: "Dry Nuts & Fruit",
    qty: 178,
    UOM: "KG",
    upr: 1000,
    curr: "PKR",
  },
];

const inventoryBtn = document.getElementById("btn1");
inventoryBtn.addEventListener("click", function () {

  console.log(arrINV);
  let resultHtml = `<h3>Below is the Detail of inventory we have:</h3>` + 
    "<table class='arrINV'><tr><th>Material ID</th><th>Name</th><th>Description</th><th>Category ID</th><th>Category Description</th><th>Quantity</th><th>Unit</th><th>Per Unit Price</th><th>Currency</th></tr>";
  for (let i = 0; i < arrINV.length; i++) {
    resultHtml +=
      "<tr><td>" +
      arrINV[i].ID +
      "</td><td>" +
      arrINV[i].name +
      "</td><td>" +
      arrINV[i].dscp +
      "</td><td>" +
      arrINV[i].CID +
      "</td><td>" +
      arrINV[i].cDscp +
      "</td><td>" +
      arrINV[i].qty +
      "</td><td>" +
      arrINV[i].UOM +
      "</td><td>" +
      arrINV[i].upr +
      "</td><td>" +
      arrINV[i].curr +
      "</td></tr>";
  }

  resultHtml += "</table>";
  document.getElementById("result").innerHTML = resultHtml;
  let resultDiv = document.getElementById('result')
  resultDiv.style.display = 'block'

  let newSaleOrder = document.getElementById('newSaleOrder')

  newSaleOrder.style.display = 'none';

  const headerTable1_heading = document.getElementById('headerTable1_heading')
  headerTable1_heading.style.display = 'none'
  
  const headerTable2_heading = document.getElementById('headerTable2_heading')
  headerTable2_heading.style.display = 'none'

  const table_1 = document.getElementById('myTable1')
  table_1.style.display = 'none'
  
  const table_2 = document.getElementById('myTable2')
  table_2.style.display = 'none'

});
// Exercise 2
// ● Create a user interface that offers a button labeled “Customers List”.
// ● Upon pressing that button, the solution should display the list of all the WholeFoods customers. 
// ● Since we are not creating database tables, create an array to manage the following customers and their details

const arrCST = [
  {
    cID: "C0001",
    cname: "Adha's Market",
    ctID: "All",
    adrr: "V2MM+PJV, Garden East Karachi, Karachi City, Sindh, Pakistan",
    email: "aghaz@asm.com",
    cdrline: 90000000,
    curr: "PKR",
    sats: "Active",
  },
  {
    cID: "C0002",
    cname: "Al-Fatah",
    ctID: "All",
    adrr: "64-Z Street 22,Sector Z DHAPhase 3, Lahore, Punjab, Pakistan",
    email: "alfatah@afsm.com",
    cdrline: 70000000,
    curr: "PKR",
    sats: "Active",
  },
  {
    cID: "C0003",
    cname: "Chacha Sheeda Store",
    ctID: "All",
    adrr: "281 Gol Bagh Rd, Shadbagh, Lahore, Punjab, Pakistan",
    email: "sheeda@shadbagh.com",
    cdrline: 1000000,
    curr: "PKR",
    sats: "Active",
  },
  {
    cID: "C0004",
    cname: "Khan Fruits",
    ctID: "Fruit",
    adrr: "8 Ghazi Road, Sector P DHA Phase1, Lahore, Punjab, Pakistan",
    email: "khanfruits@kfs.com",
    cdrline: 50000,
    curr: "PKR",
    sats: "In Active",
  },
  {
    cID: "C0005",
    cname: "Balochist adn Dry Fuit Merchant",
    ctID: "DRYFN",
    adrr: "Hamza Plaza,Plot 20, Hilal Rd S,F-11 Markaz, F 11 Markaz F-11, Islamabad, Islamanab capitol Territory 44000, Pakistan",
    email: "baloch@bdfm.com",
    cdrline: 15000000,
    curr: "PKR",
    sats: "Active",
  },
];
const customerBtn = document.getElementById("btn2");
customerBtn.addEventListener("click", function () {
  console.log(arrCST);
  let resultHtml = `<h3>Below is the Detail of Customers we have:</h3>` + 
    "<table class='arrCST'><tr><th>Customer ID</th><th>Name</th><th>Category ID</th><th>Address</th><th>Email</th><th>Credit Line</th><th>Currency</th><th>Status</th></tr>";
  for (let i = 0; i < arrCST.length; i++) {
    resultHtml +=
      "<tr><td>" +
      arrCST[i].cID +
      "</td><td>" +
      arrCST[i].cname +
      "</td><td>" +
      arrCST[i].ctID +
      "</td><td>" +
      arrCST[i].adrr +
      "</td><td><a href='mailto:" +
      arrCST[i].email +
      "'>" +
      arrCST[i].email +
      "</a></td><td style='text-align: right;'>" +
      arrCST[i].cdrline +
      "</td><td>" +
      arrCST[i].curr +
      "</td><td>" +
      arrCST[i].sats +
      "</td></tr>";
  }

  resultHtml += "</table>";
  document.getElementById("result").innerHTML = resultHtml;
  
  let resultDiv = document.getElementById('result')
  resultDiv.style.display = 'block'

  let newSaleOrder = document.getElementById('newSaleOrder')

  newSaleOrder.style.display = 'none';

  const headerTable1_heading = document.getElementById('headerTable1_heading')
  headerTable1_heading.style.display = 'none'
  
  const headerTable2_heading = document.getElementById('headerTable2_heading')
  headerTable2_heading.style.display = 'none'

  const table_1 = document.getElementById('myTable1')
  table_1.style.display = 'none'
  
  const table_2 = document.getElementById('myTable2')
  table_2.style.display = 'none'
});

// Exercise 3 
// ● In this exercise you will create an order entry screen for a sales clerk at WholeFoods. 
// ● The order entry solution will have checks and validations before creating a sales order


let create_New_Order = document.getElementById("btn3");
create_New_Order.addEventListener("click", function () {
  
  const sale_order_array = []
  let sale_order_number = 8900000000
  const date_Array = []
  const currenciesArray = []
  const currencyArrayAll = [];
  const itemTaxValueArr = []
  const orderTotalValueArr = []
  const customer_id_arr = [];
  let products_added = 0;

  let newSaleOrder = document.getElementById('newSaleOrder')

  newSaleOrder.style.display = 'block';

  let resultDiv = document.getElementById('result')
  resultDiv.style.display = 'none'

  const headerTable1_heading = document.getElementById('headerTable1_heading')
  headerTable1_heading.style.display = 'none'
  
  const headerTable2_heading = document.getElementById('headerTable2_heading')
  headerTable2_heading.style.display = 'none'

  // reset data code
  const table = document.getElementById('myTable');

    table.innerHTML = '';  
  
    
    const itemTotalBox = document.querySelector('#itemTotal .boxInfo');

    itemTotalBox.innerHTML = ""


  //   // calculating tax
    const itemTaxBox = document.querySelector('#tax .boxInfo');
     
    itemTaxBox.innerHTML = ""

  //   // Calculating order total

    const orderTotalBox = document.querySelector('#orderTotal .boxInfo');
    orderTotalBox.innerHTML = ""

  //   const quantity_input = document.getElementById("quantity_input")
  //   quantity_input.value="";

        // Enable the Validate button
        const validateButton = document.getElementById('validate');

        if (!validateButton.hasAttribute('disabled')) {
          validateButton.setAttribute('disabled', 'disabled');
        } 
  
        // Enable Delete Products button
        const deleteProductsBtn = document.getElementById("delete_products");
        if (!deleteProductsBtn.hasAttribute('disabled')) {
          deleteProductsBtn.setAttribute('disabled', 'disabled');
        } 
  
        // Enable clear data button
        const clearDataBtn = document.getElementById('clear_products')
        if (!clearDataBtn.hasAttribute('disabled')){
          clearDataBtn.setAttribute('disabled', 'disabled');
        }
        
        const saveDataBtn = document.getElementById('save')
        if (!saveDataBtn.hasAttribute('disabled')) {
          saveDataBtn.setAttribute('disabled', 'disabled');
        }
  

    //move to previous state
    
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container_inner';
    containerDiv.id = 'customer_div';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Customer';
    
    const selectElementCST = document.createElement('select');
    selectElementCST.name = 'Customer';
    selectElementCST.id = 'customer';
    
    // Add options dynamically
    arrCST.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.cID;
      option.textContent = item.cname;
      selectElementCST.appendChild(option);
    });
    
    containerDiv.appendChild(paragraph);
    containerDiv.appendChild(selectElementCST);
    
    const parentElement = document.getElementById('customer_div');
    parentElement.parentNode.replaceChild(containerDiv, parentElement);

    
    const customer_address = document.getElementById('address')
    customer_address.innerHTML= " "

  // ---------------

  // Adding customers Dynamically with JS
  // const selectElementCSTM = document.getElementById('customer');

  // arrCST.forEach((item) => {
  //   const option = document.createElement('option');
  //   option.value = item.cID;
  //   option.textContent = item.cname;
  //   selectElementCSTM.appendChild(option);
  // });

  // Adding Material ID Dynamically


  const selectElementMaterial = document.getElementById('material_id');
  console.log(selectElementMaterial);
  // Check if the select element has no child options
  if (selectElementMaterial.childElementCount === 0) {
    // Loop through the arrINV array and add options to the select element
    arrINV.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.ID;
      option.textContent = item.name;
      selectElementMaterial.appendChild(option);
    });
  }

  function addRow() {
    // Get selected material ID and quantity
    const materialId = document.getElementById('material_id').value;
    
    const quantity = document.getElementById('quantity_input').value;
    const data = arrINV.find(item => item.ID === materialId);
    if (!data) {
      console.error('No data found for material ID:', materialId);
      return;
    }
  
    function logic() {
      // console.log("logic code");


      // Create a new row and cells
      const table = document.getElementById('myTable');
      table.setAttribute("class","border_class")
      
      const headerRowExists = table.rows.length > 0 && table.rows[0].cells.length > 0;
      
      if (!headerRowExists) {
        const headerRow = table.insertRow(0);
      
        // Insert table header cells
        const header0 = document.createElement('th');
        header0.innerHTML = "Item";
        headerRow.appendChild(header0);
      
        const header1 = document.createElement('th');
        header1.innerHTML = "Material ID";
        headerRow.appendChild(header1);
      
        const header2 = document.createElement('th');
        header2.innerHTML = "Name";
        headerRow.appendChild(header2);
      
        const header3 = document.createElement('th');
        header3.innerHTML = "Description";
        headerRow.appendChild(header3);
      
        const header4 = document.createElement('th');
        header4.innerHTML = "Category ID";
        headerRow.appendChild(header4);
      
        const header5 = document.createElement('th');
        header5.innerHTML = "Quantity";
        headerRow.appendChild(header5);
      
        const header6 = document.createElement('th');
        header6.innerHTML = "Unit";
        headerRow.appendChild(header6);
      
        const header7 = document.createElement('th');
        header7.innerHTML = "Price per Unit";
        headerRow.appendChild(header7);
      
        const header8 = document.createElement('th');
        header8.innerHTML = "Currency";
        headerRow.appendChild(header8);
      
        const header9 = document.createElement('th');
        header9.innerHTML = "Total";
        headerRow.appendChild(header9);
      }
      
      // Insert values into each cell of the new row
      const row = table.insertRow(-1);
      
      const cell0 = row.insertCell(0);
      const cell1 = row.insertCell(1);
      const cell2 = row.insertCell(2);
      const cell3 = row.insertCell(3);
      const cell4 = row.insertCell(4);
      const cell5 = row.insertCell(5);
      const cell6 = row.insertCell(6);
      const cell7 = row.insertCell(7);
      const cell8 = row.insertCell(8);
      const cell9 = row.insertCell(9);
      
      // Generate auto-incremented item number
      const itemNumber = table.rows.length - 1;
    
      // Insert data into the cells
      cell0.innerHTML = itemNumber;
      cell1.innerHTML = materialId;
      cell2.innerHTML = data.name;
      cell3.innerHTML = data.dscp;
      cell4.innerHTML = data.CID;
      cell5.innerHTML = quantity;
      cell6.innerHTML = data.UOM;
      cell7.innerHTML = data.upr;
      cell8.innerHTML = data.curr;
      cell9.innerHTML = quantity * data.upr;
      //set quantity to null after add data
      const quantity_input = document.getElementById("quantity_input")
      quantity_input.value="";

      // set valie to item total
      let sum = 0;
      for (let i = 1; i < table.rows.length; i++) {

        const totalCell = table.rows[i].cells[9]; 

        const totalValue = parseFloat(totalCell.innerHTML);
        sum += totalValue;
      }

      const itemTotalBox = document.querySelector('#itemTotal .boxInfo');

      itemTotalBox.innerHTML = sum


      // calculating tax
      const itemTaxBox = document.querySelector('#tax .boxInfo');
      const tax = (sum* 15)/100; 
      itemTaxBox.innerHTML = tax

      // Calculating order total

      const orderTotal = sum + tax
      const orderTotalBox = document.querySelector('#orderTotal .boxInfo');
      orderTotalBox.innerHTML = orderTotal;

      // Fix customer after adding one row
      const parentElement = document.getElementById('customer_div');
      const selectElementCST = document.getElementById('customer');
      
      const divElement = document.createElement('div');
      divElement.className = 'boxInfo';
    
      parentElement.removeChild(selectElementCST);   
      parentElement.appendChild(divElement);
    
      
      const selectedOption = selectElementCST.options[selectElementCST.selectedIndex];
      divElement.textContent = selectedOption.textContent;
      divElement.style.paddingLeft = '15px';
      divElement.style.paddingRight = '15px';
    


      // Enable the Validate button
      const validateButton = document.getElementById('validate');

      if (validateButton.hasAttribute('disabled')) {
        validateButton.removeAttribute('disabled');
      } 

      // Enable Delete Products button
      const deleteProductsBtn = document.getElementById("delete_products");
      if (deleteProductsBtn.hasAttribute('disabled')) {
        deleteProductsBtn.removeAttribute('disabled');
      } 

      // Enable clear data button
      const clearDataBtn = document.getElementById('clear_products')
      if (clearDataBtn.hasAttribute('disabled')){
        clearDataBtn.removeAttribute('disabled')
        }


    }


    // Quantity Exception:
    if (quantity > 0 ) {

      console.log(quantity);
      // Inventory Exception:
      if (quantity < data.qty) {
        logic();
      }else{
        alert("Quantity must be less than " + data.qty +" for this products");
      }
      
    } else {
      // Handle case when the value is zero, negative, or not an integer
      if (quantity == 0) {
        alert("Zero is not allowed.");
      } else if (quantity < 0) {
        alert("Negative numbers are not allowed.");
      } 
      console.log(quantity);
    }

      //get selected customer Address
      const cusBoxInfoElement = document.querySelector('#customer_div .boxInfo');
      // console.log(cusBoxInfoElement);
      const customer_name = cusBoxInfoElement.textContent;
      // console.log(customer_name);
      const addressObj = arrCST.find(element=> element.cname == customer_name);
      // console.log(addressObj);
      const customer_address = document.getElementById('address')
      customer_address.innerHTML= "<b>Customer Detail:</b><br>" + addressObj.adrr;

      products_added += 1

  }
  
  let add_products_btn= document.getElementById("add_products")

  add_products_btn.addEventListener('click',function (event) {
    event.stopImmediatePropagation()
    addRow();
  })

  function getTableData() {
    console.log('getting table data');
    const table = document.getElementById('myTable');
    const table_data = [];
  
    // Iterate through each row of the table (excluding the header row)
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const rowData = {
        itemNumber: row.cells[0].innerHTML,
        materialId: row.cells[1].innerHTML,
        name: row.cells[2].innerHTML,
        description: row.cells[3].innerHTML,
        categoryId: row.cells[4].innerHTML,
        quantity: row.cells[5].innerHTML,
        unit: row.cells[6].innerHTML,
        pricePerUnit: row.cells[7].innerHTML,
        currency: row.cells[8].innerHTML,
        total: row.cells[9].innerHTML
      };
      table_data.push(rowData);
    }
    console.log(table_data);
    const category_Id = table_data.map(rowData => rowData.categoryId);
    console.log(category_Id);

    //get selected customer
    const boxInfoElement = document.querySelector('.container_inner .boxInfo');
    const customer_name = boxInfoElement.textContent;
    console.log(customer_name);
    
  }

  
  function validate() {

    // console.log('getting table data');
    const table = document.getElementById('myTable');
    const table_data = [];
    
    // Iterate through each row of the table (excluding the header row)
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const rowData = {
        itemNumber: row.cells[0].innerHTML,
        materialId: row.cells[1].innerHTML,
        name: row.cells[2].innerHTML,
        description: row.cells[3].innerHTML,
        categoryId: row.cells[4].innerHTML,
        quantity: row.cells[5].innerHTML,
        unit: row.cells[6].innerHTML,
        pricePerUnit: row.cells[7].innerHTML,
        currency: row.cells[8].innerHTML,
        total: row.cells[9].innerHTML
      };
      table_data.push(rowData);
    }
    // console.log(table_data);
    const category_Id = table_data.map(rowData => rowData.categoryId);
    // console.log(category_Id);

    //get selected customer name
    const boxInfoElement = document.querySelector('.container_inner .boxInfo');
    const customer_name = boxInfoElement.textContent;
    // console.log(customer_name);
    

    // Handle date exception that date must be selected
    const dateInputElement = document.querySelector('#date input');
    const dateValue = dateInputElement.value;
    
    if (dateValue === '') {
      alert('Please enter the date of the sales order creation.');
    } else {
      //To get current date
      const currentDate = new Date().toISOString().split('T')[0];

      if (dateValue < currentDate) {
        alert('The selected date cannot be before the current date.');
      } else {
        // Category ID Validation:        
        category_Id.forEach(category => {
          if (customer_name === 'Khan Fruits' && category !== 'FRUIT') {
            alert('Only Fruits allowed to Khan Fruits');
          } else if (customer_name === 'Khan Fruits' && category === 'FRUIT') {
            alert('Validation Successful for khan Fruits')
            const saveButton = document.getElementById('save');
            saveButton.removeAttribute('disabled');
            return;
          } else {
            alert('Validation Successful')
            const saveButton = document.getElementById('save');
            saveButton.removeAttribute('disabled');
            return;
          }
          return;
        });
        // console.log('Date:', dateValue);
        return;
      }
    }
 

  }

  const validateBtn =document.getElementById('validate')
  validateBtn.addEventListener('click',function (event) {
    event.stopImmediatePropagation();
    validate()
  })


  // Delete last product
  function delProduct() {
    const table = document.getElementById('myTable');
    const lastRowIndex = table.rows.length -1;
    console.log(lastRowIndex);
    const row = table.rows[lastRowIndex];
    
    if (table.rows.length > 0) {
      if (lastRowIndex == 1) {
        table.deleteRow(1); // This will remove the first row
        table.deleteRow(0); // This will remove the header
      } else if (lastRowIndex > 1) {
            table.deleteRow(lastRowIndex); // This will remove the first row
        }
    }

    // if (lastRowIndex == 1) {
    //   table.deleteRow(lastRowIndex);
    //   table.deleteRow[0]
    // } else {
    //   table.deleteRow(lastRowIndex);
    // }




    // set value to item total
    let sum = 0;
    for (let i = 1; i < table.rows.length; i++) {

      const totalCell = table.rows[i].cells[9]; 

      const totalValue = parseFloat(totalCell.innerHTML);
      sum += totalValue;
    }

    const itemTotalBox = document.querySelector('#itemTotal .boxInfo');

    itemTotalBox.innerHTML = sum


    // calculating tax
    const itemTaxBox = document.querySelector('#tax .boxInfo');
    const tax = (sum* 15)/100; 
    itemTaxBox.innerHTML = tax

    // Calculating order total

    const orderTotal = sum + tax
    const orderTotalBox = document.querySelector('#orderTotal .boxInfo');
    orderTotalBox.innerHTML = orderTotal;

    //set quantity to null after add data
    const quantity_input = document.getElementById("quantity_input")
    quantity_input.value="";

  }

  let del_product_btn = document.getElementById("delete_products")

  del_product_btn.addEventListener('click',function (event) {
    event.stopImmediatePropagation()
    delProduct();
  })

  // Clear Data Button
  function Clear_all_data() {
    const table = document.getElementById('myTable');
    table.innerHTML = '';  
    
    
    const itemTotalBox = document.querySelector('#itemTotal .boxInfo');

    itemTotalBox.innerHTML = ""


    // calculating tax
    const itemTaxBox = document.querySelector('#tax .boxInfo');
     
    itemTaxBox.innerHTML = ""

    // Calculating order total

    const orderTotalBox = document.querySelector('#orderTotal .boxInfo');
    orderTotalBox.innerHTML = ""

    const quantity_input = document.getElementById("quantity_input")
    quantity_input.value="";

    //move to previous state
    
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container_inner';
    containerDiv.id = 'customer_div';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Customer';
    
    const selectElementCST = document.createElement('select');
    selectElementCST.name = 'Customer';
    selectElementCST.id = 'customer';
    
    // Add options dynamically
    arrCST.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.cID;
      option.textContent = item.cname;
      selectElementCST.appendChild(option);
    });
    
    containerDiv.appendChild(paragraph);
    containerDiv.appendChild(selectElementCST);
    
    const parentElement = document.getElementById('customer_div');
    parentElement.parentNode.replaceChild(containerDiv, parentElement);
    

    const saveButton = document.getElementById('save');
    if (!saveButton.hasAttribute('disabled')) {
      saveButton.setAttribute('disabled', 'disabled');
    }
   
    // Disable Delete Products button
    const deleteProductsBtn = document.getElementById("delete_products");
    if (!deleteProductsBtn.hasAttribute('disabled')) {
      deleteProductsBtn.setAttribute('disabled', 'disabled');
    } 
    
    // Disable the Validate button
    const validateButton = document.getElementById('validate');

    if (!validateButton.hasAttribute('disabled')) {
      validateButton.setAttribute('disabled', 'disabled');
    } 



    // Disable clear data button
    if (!Clear_data_btn.hasAttribute('disabled')){
      Clear_data_btn.setAttribute('disabled', 'disabled');
      }
    
    const customer_address = document.getElementById('address')
    customer_address.innerHTML= " "
  }
  
  let Clear_data_btn = document.getElementById("clear_products")
  
  Clear_data_btn.addEventListener('click',function (e) {
    e.stopImmediatePropagation();
    Clear_all_data()
  })
  


  
  function save_data() {

    console.log("saveeeeeeeeeeeeeeeeeeeee")
    // console.log('getting table data');
    const myTable1 = document.getElementById('myTable1');
    const myTable2 = document.getElementById('myTable2')

    const myTable = document.getElementById('myTable');
    const table_data = [];
  
    const headerTable1_heading = document.getElementById('headerTable1_heading')
    headerTable1_heading.style.display = 'block'
    const headerTable2_heading = document.getElementById('headerTable2_heading')
    headerTable2_heading.style.display = 'block'
    // Iterate through each row of the table (excluding the header row)
    for (let i = 1; i < myTable.rows.length; i++) {
      const row = myTable.rows[i];
      const rowData = {
        itemNumber: row.cells[0].innerHTML,
        materialId: row.cells[1].innerHTML,
        name: row.cells[2].innerHTML,
        description: row.cells[3].innerHTML,
        categoryId: row.cells[4].innerHTML,
        quantity: row.cells[5].innerHTML,
        unit: row.cells[6].innerHTML,
        pricePerUnit: row.cells[7].innerHTML,
        currency: row.cells[8].innerHTML,
        total: row.cells[9].innerHTML
      };
      table_data.push(rowData);
    }
    console.log("Table Data: " , table_data);

    // get selected customer name
    const cusBoxInfoElement = document.querySelector('#customer_div .boxInfo');
    const customer_name = cusBoxInfoElement.textContent;
    const customerObj = arrCST.find(element=> element.cname == customer_name);
    // get customer id
    const customer_id = customerObj.cID
    console.log(customer_id);
    customer_id_arr.push(customer_id)

    console.log('customer_id_arr: ', customer_id_arr);

    // sale order number
    sale_order_number += 1
    sale_order_array.push(sale_order_number)

    // get sales date
    const dateInputElement = document.querySelector('#date input');
    const date_Value = dateInputElement.value;
    date_Array.push(date_Value)
    
    // get sales currency
    let sales_currency = table_data.map(row => row.currency)

    // all currencies used
    sales_currency.forEach(function(currency) {
    currenciesArray.push(currency);
    });

    const currencySet = new Set(sales_currency)
    
    // const currencyArray = Array.from(currencySet);
    //to use  in currency header
    const currencyArray = [...currencySet];
    currencyArrayAll.push(currencyArray.toString());
    

    // set value to item total
    let sum = 0;
    for (let i = 1; i < myTable.rows.length; i++) {

      const totalCell = myTable.rows[i].cells[9]; 

      const totalValue = parseFloat(totalCell.innerHTML);
      sum += totalValue;
    }

    // get 15% Tax
    const itemTaxBox = document.querySelector('#tax .boxInfo');  
    const itemTaxValue = itemTaxBox.textContent;

    itemTaxValueArr.push(itemTaxValue)

    // get Total Price
    const orderTotalBox = document.querySelector('#orderTotal .boxInfo');
    const orderTotalValue = orderTotalBox.textContent;

    orderTotalValueArr.push(orderTotalValue)

    const saleOrderDiv = document.getElementById('newSaleOrder')
    saleOrderDiv.style.display = 'none'
    // data used in table
    // console.log('data used in table...');
    // console.log('sale_order_array ',sale_order_array);
    // console.log('customer_id_arr ',customer_id_arr);
    // console.log('date_Array ',date_Array);
    // console.log('orderTotalValueArr ',orderTotalValueArr);
    // console.log('itemTaxValueArr ',itemTaxValueArr);
    // console.log('currencyArrayAll ',currencyArrayAll);



    
    // sales order header

    myTable1.setAttribute("class", "border_class");

    const headerRowExists = myTable1.rows.length > 0 && myTable1.rows[0].cells.length > 0;
    console.log("header rowwwwwwwwww",headerRowExists)

    if (!headerRowExists) {
      const headerRow = myTable1.insertRow(0);

      // Insert table header cells
      const header0 = document.createElement('th');
      header0.innerHTML = "Sales Order No.";
      headerRow.appendChild(header0);

      const header1 = document.createElement('th');
      header1.innerHTML = "Customer ID";
      headerRow.appendChild(header1);

      const header2 = document.createElement('th');
      header2.innerHTML = "Delivery Date";
      headerRow.appendChild(header2);

      const header3 = document.createElement('th');
      header3.innerHTML = "Total Price";
      headerRow.appendChild(header3);

      const header4 = document.createElement('th');
      header4.innerHTML = "15% Tax";
      headerRow.appendChild(header4);

      const header5 = document.createElement('th');
      header5.innerHTML = "Currency";
      headerRow.appendChild(header5);
    }

    // Check if the row already exists before adding
    const existingRows = myTable1.querySelectorAll('tr');
    const existingRowNumbers = Array.from(existingRows).map(row => row.cells[0].innerHTML);

    const currentSalesOrderNumber = sale_order_array[sale_order_array.length - 1];

    if (!existingRowNumbers.includes(currentSalesOrderNumber))
    {

    // // Insert values into each cell of the new row
    // for (let i = 0; i < sale_order_array.length; i++) {
      let row = myTable1.insertRow();
    
      let cell0 = row.insertCell(0);
      let cell1 = row.insertCell(1);
      let cell2 = row.insertCell(2);
      let cell3 = row.insertCell(3);
      let cell4 = row.insertCell(4);
      let cell5 = row.insertCell(5);
    
      cell0.innerHTML = sale_order_array[sale_order_array.length-1];
      cell1.innerHTML = customer_id_arr[customer_id_arr.length-1];
      cell2.innerHTML = date_Array[date_Array.length-1];
      cell3.innerHTML = orderTotalValueArr[orderTotalValueArr.length-1];
      cell4.innerHTML = itemTaxValueArr[itemTaxValueArr.length-1];
      cell5.innerHTML = currencyArrayAll[currencyArrayAll.length-1];
    }
    // sales order items 
    myTable2.setAttribute("class", "border_class");

    const header_Row_Exists = myTable2.rows.length > 0 && myTable2.rows[0].cells.length > 0;
    console.log("header row table 2",header_Row_Exists)

    if (!header_Row_Exists) {
      const header_Row = myTable2.insertRow(0);

      // Insert table header cells
      const header_0 = document.createElement('th');
      header_0.innerHTML = "Sales Order No.";
      header_Row.appendChild(header_0);

      const header_1 = document.createElement('th');
      header_1.innerHTML = "Line Item ID";
      header_Row.appendChild(header_1);

      const header_2 = document.createElement('th');
      header_2.innerHTML = "Material ID";
      header_Row.appendChild(header_2);

      const header_3 = document.createElement('th');
      header_3.innerHTML = "Order Quantity";
      header_Row.appendChild(header_3);

      const header_4 = document.createElement('th');
      header_4.innerHTML = "Unit of Measure (UoM)";
      header_Row.appendChild(header_4);

      const header_5 = document.createElement('th');
      header_5.innerHTML = "Price/Unit";
      header_Row.appendChild(header_5);

      const header_6 = document.createElement('th');
      header_6.innerHTML = "Currency";
      header_Row.appendChild(header_6);
    }



      for (let i = 0; i < table_data.length; i++) {
        const rowData = table_data[i];
        
      let row_myTable2 = myTable2.insertRow();

      let cell_0 = row_myTable2.insertCell(0);
      let cell_1 = row_myTable2.insertCell(1);
      let cell_2 = row_myTable2.insertCell(2);
      let cell_3 = row_myTable2.insertCell(3);
      let cell_4 = row_myTable2.insertCell(4);
      let cell_5 = row_myTable2.insertCell(5);
      let cell_6 = row_myTable2.insertCell(6);


      cell_0.innerHTML = sale_order_number;
      cell_1.innerHTML = rowData.itemNumber;
      cell_2.innerHTML = rowData.materialId;
      cell_3.innerHTML = rowData.quantity;
      cell_4.innerHTML = rowData.unit;
      cell_5.innerHTML = rowData.pricePerUnit;
      cell_6.innerHTML = rowData.currency;
      }
   


  }
  

  const saveBtn = document.getElementById('save');
  saveBtn.addEventListener('click', function(event) {
    event.stopImmediatePropagation(); // add this line to stop event bubbling and other listeners
    save_data();
   });

});

let list_sales_order = document.getElementById("btn4");
list_sales_order.addEventListener('click', function () {
  const table_1 = document.getElementById('myTable1')
  table_1.style.display = 'block'
  
  const table_2 = document.getElementById('myTable2')
  table_2.style.display = 'block'
  
  const headerTable1_heading = document.getElementById('headerTable1_heading')
  headerTable1_heading.style.display = 'block'
  
  const headerTable2_heading = document.getElementById('headerTable2_heading')
  headerTable2_heading.style.display = 'block'

  let resultDiv = document.getElementById('result')
  resultDiv.style.display = 'none'

  let newSaleOrder = document.getElementById('newSaleOrder')

  newSaleOrder.style.display = 'none';


})


















    // const table = document.querySelector('.myTable1 table');
    
    // let tableHTML = '<table  border="1"><tr><th>Sales Order No.</th><th>Customer ID</th><th>Delivery Date</th><th>Total Price</th><th>15% Tax</th><th>Currency</th></tr>';

    
    // for (let i = 0; i < sale_order_array.length; i++) {
    //   tableHTML += `<tr>
    //     <td>${sale_order_array[i]}</td>
    //     <td>${customer_id_arr[i]}</td>
    //     <td>${new Date(date_Array[i]).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
    //     <td>${parseInt(orderTotalValueArr[i]) + parseInt(itemTaxValueArr[i])}</td>
    //     <td>${itemTaxValueArr[i]}</td>
    //     <td>${currencyArrayAll[i]}</td>
    //   </tr>`;
    // }
    
    // tableHTML += '</table>';
    // table.innerHTML = tableHTML;