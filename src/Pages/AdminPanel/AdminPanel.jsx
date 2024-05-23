import { useCallback, useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';
import Biograhpy from 'components/Biography/Biography';
import { ReactComponent as DeletedProfileIcon } from '../../images/delete-icon.svg';
import { ReactComponent as AddIcon } from '../../images/add-button.svg';
import getAllBios from 'utils/api/bios/getAllBios';
import updateBio from 'utils/api/bios/updateBio';
import { useNavigate } from 'react-router-dom';
const permissionedVkIds = [373718115, 301865955];

function PictureComponent({ picture, onChange, onDelete, idx }) {
  const [editedPicture, setEditedPicture] = useState(picture);
  return (
    <li key={picture} className={styles.pictureContainer}>
      <img src={editedPicture} alt="" height={80} />
      <TextField
        value={editedPicture}
        label="Ссылка"
        onChange={e => {
          setEditedPicture(e.target.value);
          onChange(e);
        }}
      />
      <DeletedProfileIcon
        onClick={onDelete}
        height={40}
        style={{ color: 'green' }}
      />
    </li>
  );
}

export default function AdminPanel() {
  const user = useSelector(store => store.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (!permissionedVkIds.includes(user.vkId)) {
      navigate('/');
    }
  }, [user, navigate]);
  const [bios, setBios] = useState();
  useEffect(() => {
    const fetchBios = async () => {
      const allBios = await getAllBios();
      setBios(allBios);
    };
    fetchBios();
  }, []);
  const [selectedBioId, setSelectedBioId] = useState('');
  const [editedBio, setEditedBio] = useState();
  const handleUpdate = useCallback(() => {
    if (user)
      updateBio(user.token, { ...editedBio, pfp: undefined, name: undefined });
  }, [user, editedBio]);
  useEffect(() => {
    if (bios && selectedBioId)
      setEditedBio(bios.find(bio => bio.vkId === selectedBioId));
  }, [selectedBioId, bios]);
  useEffect(() => {
    console.log('editedBio', editedBio);
  }, [editedBio]);
  return (
    <div className={styles.container}>
      {/* <ReactModal
        className={
          isDarkTheme
            ? [styles.modalContent, 'dark--theme'].join(' ')
            : styles.modalContent
        }
        overlayClassName={styles.modalOverlay}
        overlayElement={(props, contentElement) => (
          <div {...props}>
            {contentElement}
            <button onClick={closeModal} className={styles.closeButton}>
              <CloseIcon className={styles.closeIcon} />
            </button>
          </div>
        )}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onRequestClose={closeModal}
        isOpen={isModalShown}
      >
        {modalContent}
      </ReactModal> */}
      <h2>Рассказы</h2>
      <FormControl className={styles.selectFormControl}>
        <InputLabel>Рассказ</InputLabel>
        <Select
          label="Рассказ"
          variant="outlined"
          onChange={e => {
            setSelectedBioId(e.target.value);
          }}
          className={styles.bioSelect}
          value={selectedBioId}
        >
          {bios &&
            bios.map(bio => (
              <MenuItem key={bio.vkId} value={bio.vkId}>
                <div className={styles.biosMenuItem}>
                  <img
                    className={styles.biosMenuPfp}
                    src={bio.pfp}
                    alt={bio.name}
                  />
                  <span className={styles.biosMenuName}>{bio.name}</span>
                  {bio.deleted && <DeletedProfileIcon color="red" width={30} />}
                </div>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {editedBio && (
        <>
          <h2>Данные рассказа: </h2>
          <h3>Текст:</h3>
          <TextField
            label="Текст"
            onChange={(e, value) => {
              setEditedBio(oldBio => ({
                ...oldBio,
                text: e.target.value,
              }));
            }}
            fullWidth
            multiline
            value={editedBio.text}
          />
          <h3>Картинки:</h3>
          {editedBio.imagesUrl && editedBio.imagesUrl.length > 0 && (
            <ul>
              {editedBio.imagesUrl.map((image, idx) => (
                <PictureComponent
                  onChange={e => {
                    setEditedBio(oldBio => {
                      const newBio = oldBio;
                      newBio.imagesUrl[idx] = e.target.value;
                      return newBio;
                    });
                  }}
                  onDelete={() => {
                    setEditedBio(oldBio => {
                      const newBio = { ...oldBio };
                      newBio.imagesUrl = newBio.imagesUrl.filter(
                        (_, index) => index !== idx
                      );
                      console.log(newBio);
                      return newBio;
                    });
                  }}
                  key={image}
                  picture={image}
                />
              ))}
            </ul>
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '10px',
            }}
          >
            Добавить картинку{' '}
            <AddIcon
              onClick={() => {
                setEditedBio(oldBio => {
                  const newBio = { ...oldBio };
                  newBio.imagesUrl.push('Ссылка');
                  return newBio;
                });
              }}
              height={30}
              style={{ color: 'green' }}
            />
          </div>
          <div>
            Удален?{' '}
            <Checkbox
              sx={{
                color: 'green',
                '&.Mui-checked': {
                  color: 'green',
                },
              }}
              checked={editedBio.deleted}
              defaultChecked={editedBio.deleted}
              onChange={(e, checked) => {
                setEditedBio(oldBio => ({ ...oldBio, deleted: checked }));
              }}
            />
          </div>
          <h2>Предпросмотр:</h2>
          <div className={styles.selectedBioContainer}>
            {editedBio && <Biograhpy bio={editedBio} />}
            <ul className={styles.buttonsList}>
              <li className={styles.buttonsItem}>
                <button onClick={handleUpdate} className={styles.button}>
                  Сохранить
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
      {/* <h2>Правила</h2>
      <button
        className={styles.button}
        onClick={() => {
          setModalContent(
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  console.log(e);
                }}
              >
                <Rules ref={rulesRef} editable={true} />
                <button
                  className={styles.button}
                  type="submit"
                  onClick={e => {
                    console.log(rulesRef.current.innerHTML);
                  }}
                >
                  Сохранить
                </button>
              </form>
            </div>
          );
          setIsModalShown(true);
        }}
      >
        Редактировать
      </button> */}
    </div>
  );
}
