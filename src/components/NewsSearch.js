import  React  from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// const query={
//     q:'',
//     doms:''
// }

// function reducer(query, action) {
//     switch (action.type) {
//       case 'q':
//         query.q=action.payload 
//         return query.q
//       case 'doms':
//           query.doms=action.payload
//           break
//       default:
//         throw new Error();
//     }
//   }

export default function BasicModal(props) {
 
  const [query, setq] = React.useState({q:'',
                                    from:'',
                                to:'',
                                 lang:'',
                                 sortBy:''});
 const[sub,setSub]=React.useState(false)

  const handleClose = () => {props.setOpen(false);
                             props.setSearch(query)}
    const handleSubmit = () => {
        setSub(true)
        if (query.q.length > 1) {
            props.setOpen(false);
            setSub(false)
            props.setSearch(query)
        }
    }
                             
  const handleChange = e => {
    const {name , value} = e.target;
    const newQuery = {...query};
    newQuery[name]=value
    setq(newQuery)
}

  return (
    <div>

      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography  id="modal-modal-title" variant="h6" component="h2">
          Enter Filter parameters
          </Typography>
          <br/>
        <TextField fullWidth error={sub&&query.q.length < 1} label="Search by Title/Desc" required  value={query.q} name="q" onChange={(e)=>handleChange(e)} variant="outlined" />
        <br/> <br/>
        
        <TextField
        fullWidth
        id="date"
        label="From"
        type="date"
        value={query.from}
        // defaultValue="2017-05-24"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e=>handleChange(e)}
        name="from"
        variant="outlined"
      />
      <br/>
      <br/>
          <TextField
        fullWidth
        id="date"
        label="To"
        type="date"

        InputLabelProps={{
          shrink: true,
        }}
        onChange={e=>handleChange(e)}
        name="to"
        variant="outlined"
      />
      <br/><br/>

      <InputLabel>
            Langueage
          </InputLabel>
          <Select
          fullWidth
            value={query.lang}
           
            name="lang"
            onChange={(e)=>handleChange(e)}
            input={
              <OutlinedInput
               label="Language"
                name="lang"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'ar'}>ar</MenuItem>
            <MenuItem value={'de'}>de</MenuItem>
            <MenuItem value={'en'}>en</MenuItem>
            <MenuItem value={'es'}>es</MenuItem>
            <MenuItem value={'fr'}>fr</MenuItem>
            <MenuItem value={'he'}>he</MenuItem>
            <MenuItem value={'it'}>it</MenuItem>
            <MenuItem value={'nl'}>nl</MenuItem>
            <MenuItem value={'no'}>no</MenuItem>
            <MenuItem value={'pt'}>pt</MenuItem>
            <MenuItem value={'ru'}>ru</MenuItem>
            <MenuItem value={'se'}>se</MenuItem>
            <MenuItem value={'ud'}>ud</MenuItem>
            <MenuItem value={'zh'}>zh</MenuItem>
          </Select>
            <br/><br/>
          <InputLabel>
            Sort by
          </InputLabel>
          <Select
          fullWidth
            value={query.sortBy}
           
            name="sortBy"
            onChange={(e)=>handleChange(e)}
            input={
              <OutlinedInput
               label="Sort By"
                name="lang"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'relevancy'}>relevancy</MenuItem>
            <MenuItem value={'popularity'}>popularity</MenuItem>
            <MenuItem value={'publishedAt'}>publishedAt</MenuItem>
           
          </Select>
         <br/><br/>
        <Button variant="contained" color="primary"  onClick={handleSubmit}>Search</Button>
        </Box>
      </Modal>
    </div>
  );
}
