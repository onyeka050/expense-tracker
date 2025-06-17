
import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddExpense({ amount, setAmount, addExpense }) {
  return (
    <View>
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={addExpense} />
    </View>
  );
}
