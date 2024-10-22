import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoList } from './toDoList';

describe('To-Do List', () => {
    test('Read: Are all the items in the list displayed on the screen',()=>{
        render(<ToDoList/>);
        expect(screen.queryByText('Apples')).toBeInTheDocument();
        expect(screen.queryByText('Bananas')).toBeInTheDocument();
    });
    test('Is the number of items checked the same as shown in the title?',()=>{
        render(<ToDoList/>)
        const groceryItems = screen.queryAllByTestId('fruits');

        fireEvent.click(groceryItems[0]);
        expect(screen.queryByText('Items bought: 1')).toBeInTheDocument();
        fireEvent.click(groceryItems[0]); 
        expect(screen.queryByText('Items bought: 2')).toBeInTheDocument();
    });
});