  export const initialState =   [
  
        {
          item: 'Learn about reducers',
          completed: false,
          id: Date.now()
        },
      
    ]
  
   
export const todoReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'ADD_TODO':
          return [...state,
              { item: action.payload, completed: false, id: Date.now() }
            ]
          
  
      case 'TOGGLE_COMPLETED':
        return state.map(item => 
        { return item.id === action.payload ? {...item, completed: !item.completed} : item 
         })
      
         case 'CLEAR_COMPLETED':
          return state.filter(item => !item.completed)
        
        default:
          return state;  
  } 
   
 };
