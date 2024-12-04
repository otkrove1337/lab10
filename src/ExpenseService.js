import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const expenseCollection = collection(db, 'expenses');

export const addExpense = async (expense) => {
  const docRef = await addDoc(expenseCollection, {
    ...expense,
    date: expense.date instanceof Date ? expense.date : new Date(expense.date), // Перетворення рядка в Date
  });
  return { id: docRef.id, ...expense };
};

export const getExpenses = async () => {
  const snapshot = await getDocs(expenseCollection);
  const expenses = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      date: data.date.toDate(), // Перетворення Firestore Timestamp у Date
    };
  });
  return expenses;
};

export const updateExpense = async (id, updatedData) => {
  const docRef = doc(db, 'expenses', id);
  await updateDoc(docRef, updatedData);
};

export const deleteExpense = async (id) => {
  const docRef = doc(db, 'expenses', id);
  await deleteDoc(docRef);
};
