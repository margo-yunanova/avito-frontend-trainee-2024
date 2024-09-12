import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { FC, FormEvent } from 'react';

interface ICreateAdvertisementModal {
  title?: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  submitButtonText?: string;
}

export const CreateAdvertisementModal: FC<ICreateAdvertisementModal> = ({
  title = 'Создать',
  name,
  description,
  price,
  imageUrl,
  submitButtonText = 'Создать',
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
        <DialogTitle>{title}</DialogTitle>
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
            defaultValue={name ?? ''}
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
            defaultValue={description ?? ''}
            multiline
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
            defaultValue={price ?? ''}
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
            defaultValue={imageUrl ?? ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Закрыть</Button>
          <Button type="submit">{submitButtonText}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
