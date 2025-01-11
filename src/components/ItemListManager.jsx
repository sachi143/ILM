import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-zinc-900">
        <CardTitle className="text-green-500">Item List Manager</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Item List</h2>
            {items.length > 0 && (
              <ul className="list-disc pl-6 space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="space-y-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter item"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleAddItem}
              className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Add Item
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemListManager;