import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { FC, FormEvent } from 'react';

interface ICreateAdvertisementModal {
  open: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const CreateAdvertisementModal: FC<ICreateAdvertisementModal> = ({
  open,
  onClose,
  onSubmit,
}) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: 'form',
          onSubmit,
        }}
      >
        <DialogTitle>Создать объявление</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Заголовок"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="description"
            name="description"
            label="Описание"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="price"
            name="price"
            label="Цена"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="imageUrl"
            name="imageUrl"
            label="Изображение"
            type="url"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Закрыть без сохранения</Button>
          <Button type="submit">Создать</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
