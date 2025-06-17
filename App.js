
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';

export default function App() {
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([]);

  const addExpense = () => {
    if (amount) {
      setItems([...items, { id: Date.now().toString(), amount }]);
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      <AddExpense amount={amount} setAmount={setAmount} addExpense={addExpense} />
      <ExpenseList items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40 },
  title: { fontSize: 24, marginBottom: 20 }
});
