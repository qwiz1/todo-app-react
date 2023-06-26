import React, { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useDeleteTodo, useUpdateTodo } from 'src/query-hooks';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Todo } from 'src/common/types';
import { CustomTableRow } from './table-row.component';

type HeadCell = {
  id: string;
  align: 'left' | 'center' | 'right' | 'inherit' | 'justify' | undefined;
  label: string;
};

const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    align: 'left',
    label: 'Todo Title',
  },
  {
    id: 'description',
    align: 'left',
    label: 'Description',
  },
  {
    id: 'actions',
    align: 'center',
    label: 'Actions',
  },
];

type Props = {
  todos: Todo[];
};

const TodoTableList: React.FC<Props> = ({ todos }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { mutate: mutateUpdate } = useUpdateTodo();
  const { mutate: mutateDelete } = useDeleteTodo();
  
  const handleToggleTodoComplete = (id: number, checked: boolean) => {
    mutateUpdate({ id, data: { isCompleted: checked } });
  };

  const handleDeleteTodo = (id: number) => {
    mutateDelete(id);
    toast.success('Todo Deleted!');
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleTodos = useMemo(
    () => todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, todos],
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 1024, m: 'auto', mt: 2 }}>
      <Paper
        sx={{
          width: '100%',
          mb: 2,
          borderRadius: 0,
          border: '2px solid black',
        }}
      >
        <TableContainer>
          <Table
            sx={{ minWidth: 690 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.align}
                    sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                  >
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleTodos.map((todo) => (
                <CustomTableRow
                  key={todo.id}
                  todo={todo}
                  onToggleSwitch={handleToggleTodoComplete}
                  onClickDelete={handleDeleteTodo}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={todos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export { TodoTableList };
