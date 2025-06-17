
import React from 'react';
import { FlatList, Text } from 'react-native';

export default function ExpenseList({ items }) {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Text>• ${item.amount}</Text>}
    />
  );
}
