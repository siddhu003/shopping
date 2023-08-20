import React from 'react'
import { useSelector } from 'react-redux'

const Recommendations = () => {
  var users = [{
    id: '64e057aa772ab29039c2d228',
    name: 'Siddharth',
    email: 'siddharth332003@gmail.com',
    history: [3, 4, 1, 5, 6],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d229',
    name: 'Rohit',
    email: 'rohit@gmail.com',
    history: [3, 4, 1, 2, 5],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d230',
    name: 'Abhi',
    email: 'abhineet@gmail.com',
    history: [4, 2],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d231',
    name: 'Jagadeesh',
    email: 'Jagadeesh@gmail.com',
    history: [3, 2, 6],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d232',
    name: 'Himanshu',
    email: 'Himanshu@gmail.com',
    history: [3, 4, 1, 5, 6],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
    }];
  
  // var User = {
  //   _id: '64e057aa772ab29039c2d228',
  //   name: 'Siddharth',
  //   email: 'siddharth332003@gmail.com',
  //   history: [3, 4, 1, 5, 6],
  //   joinedOn: '2023-08-19T05:49:49.139+00:00'
  // };

  var User = users[2];

  
  const imageList = useSelector(state => state.imagesReducer)
  console.log(imageList)
  console.log(users)

  var history = [[3, 4, 1, 5, 6], [3, 4, 1, 2, 5], [4, 2], [3, 2, 6], [3, 4, 1, 5, 6]]
  console.log(history)

  // class Node {
  //   constructor(data, noofbranch) {
  //       this.data = data;
  //       this.noofbranch = noofbranch;
  //       this.branches = 0;
  //       this.branch = new Array(30).fill(null);
  //   }
  // }
  

  // // Define a function to create a new node
  // function newNode(data, branch) {
  //     return new Node(data, branch);
  // }

  // function findBranch(tree, item) {
  //   for (let k = 0; k < tree.branch.length; k++) {
  //       if (tree.branch[k] && tree.branch[k].data === item) {
  //           tree.branch[k].noofbranch++;
  //           return k;
  //       }
  //   }
  //   return -1;
  // }
  
  // function fptree(tree, tr) {
  //   let temp = tree;
  //   let i = 0;

  //   while (i < tr.length) {
  //       const k = findBranch(temp, tr[i]);

  //       if (k === -1) {
  //           const newNode = newNode(tr[i]);
  //           temp.branch.push(newNode);
  //           temp = newNode;
  //           i++;
  //       } else {
  //           temp = temp.branch[k];
  //           i++;
  //       }
  //   }

  //   return tree;
  // }

  // Define a node class
class Node {
    constructor(data) {
        this.data = data;
        this.noofbranch = 0;
        this.branches = 0;
        this.branch = new Array(30).fill(null);
    }
}

// Function to create a new node
function newNode(data, branch) {
    return new Node(data);
}

// Function to find a branch with a specific data value
function findBranch(tree, item) {
    let k = 0;
    while (tree.branch[k] !== null) {
        if (tree.branch[k].data === item) {
            tree.branch[k].noofbranch++;
            return k;
        }
        k++;
    }
    return k;
}

// Function to build an FP tree
function fptree(tree, tr) {
    let temp = tree;
    let i = 0;

    while (i < tr.length) {
        const k = findBranch(temp, tr[i]);

        if (k >= temp.branches) {
            temp.branch[k] = newNode(tr[i], 1);
            temp.branches++;
            temp = temp.branch[k];
            i++;
        } else {
            temp = temp.branch[k];
            i++;
        }
    }

    return tree;
}
  

  function printFPTree(prefix, node, isLeft) {
    if (node !== null) {
        console.log(prefix + (isLeft ? '|--' : 'L--') + node.data + ':' + node.noofbranch);
        // Add code to print to a file or another output stream here if needed.

        for (let l = 0; l < node.branches.length; l++) {
            printFPTree(prefix + (isLeft ? '|   ' : '    '), node.branches[l], true);
        }
    }
  }

  function printSubsets(datasub, tr, r, index, data, i) {
    if (index === r) {
        const subset = [];
        for (let j = 0; j < r; j++) {
            subset.push(data[j]);
        }
        datasub.push(subset);
        return datasub;
    }
    if (i >= tr.length) {
        return datasub;
    }
    data[index] = tr[i];
    datasub = printSubsets(datasub, tr, r, index + 1, data, i + 1);
    datasub = printSubsets(datasub, tr, r, index, data, i + 1);
    return datasub;
  }
  

  
    
  var tre = newNode(0, 0);
  for (let i = 0; i < history.length; i++) {
    tre = fptree(tre, history[i]);
  }
  
  printFPTree(' ', tre, true);

    const maxi = 5; // Maximum itemset size
  const fp = [[1, 2, 3, 4, 5], [2, 3, 4], [1, 2, 3]];

  // Initialize 'data1' array with zeros
  const data1 = new Array(maxi).fill(0);

  // for (let i = maxi; i >= 2; i--) {
  //     let fp_final = [];

  //     // Generate frequent itemsets of size 'i'
  //     for (let j of fp) {
  //         if (j.length >= i) {
  //             const data = new Array(i).fill(0);
  //             fp_final = printSubsets(fp_final, j, j.length, i, 0, data, 0);
  //         }
  //     }

  //     console.log(i + " item itemsets\n");

  //     for (let k of fp_final) {
  //         console.log(k.join(" "));
  //     }

  //     console.log("\nFIU Tree for " + i + " itemsets\n");

  //     // Create a new FP tree
  //     let new_tre = newNode(0, 0);

  //     for (let m = 0; m < fp_final.length; m++) {
  //         new_tre = fptree(new_tre, fp_final[m]);
  //         // Print the tree if needed: printBT("", new_tre, true, i);
  //     }

  //     console.log("\n");
  // }

  const firstVector = [1, 3, 4, 5, 6];
  const firstInt = 2;
  const pair = [firstVector, firstInt];
  const final = [];

  final.push(pair);

  console.log(final);

  let his = User.history;

  let newArray = firstVector.filter(item => !his.includes(item));

  // for (let i = 0; i < his.length; i++)
  // {
  //   newArray = his.filter(item => item !== his[i]);  
  // }
  if (newArray.length === 0)
  {
    console.log("None");
  }
  else {
    console.log(newArray)
  }

  const filteredItems = newArray.map((index) => imageList.data[index - 1]);
  console.log(filteredItems)
  

  return (
    <div className='home-2'>
      <h1>Recommendations</h1>
      {
        newArray === null ?
          <h1>None</h1> :
          <>
            <div className="images">
              {
                filteredItems === null ?
                  <h1>No orders yet</h1> :
                  <>
                    {
                      filteredItems.map((singleData) => {
                        const base64String = btoa(
                        String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
                      // const base64String = Buffer.from(singleData, "base64").toString()
                        )
                        
                        return <>
                          <h1>{singleData.name}</h1>
                          <img src={`data:image/png;base64,${base64String}`} width='300' />
                        </>
                        
                      })
                    }
                  </>
              }
            </div>
            
          </>
      }
    </div>
  )
}

export default Recommendations
