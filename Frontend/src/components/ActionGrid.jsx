
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button, Card, Grid, Link, Typography } from '@mui/material';
import { keywordsList, programmingLanguagesNames, result } from '../data/data';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import CommitIcon from '@mui/icons-material/Commit';
import Groups3Icon from '@mui/icons-material/Groups3';
import axios from 'axios';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const progLangs = programmingLanguagesNames;
const keyLists = keywordsList;

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const useStyle = () => ({
    input: {
        padding: "100px"
    },
    inputDetails: {
        width: "100%",
        margin: "1% 0"
    },
})


function FromSection() {
    const tmpResults = result;
    const theme = useTheme();
    const [progName, setProgName] = React.useState([]);
    const [keyName, setKeyName] = React.useState([]);

    const [resultList, setResultList] = React.useState([]);

    const classes = useStyle();

    const handleProgramChange = (event) => {
        const {
            target: { value },
        } = event;
        setProgName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleKeywordChange = (event) => {
        const {
            target: { value },
        } = event;
        setKeyName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const getApiData = () => {
       
        axios.get(
            "http://127.0.0.1:5000/api",  
            {
                params: {
                    prog: JSON.stringify(progName),
                    key: JSON.stringify(keyName),
            },  
            }    
        ).then((response) => {
            setResultList(JSON.parse(response.data.result))
        }
        ); 
    }

    const handleSubmit = () => {
        console.log(progName);
        console.log(keyName);

        getApiData();

        // setResultList(tmpResults);
    }

    return (
        <>
            <Card sx={classes.input} id="ActionGrid">

                {/* Programming Languages Select */}
                <FormControl sx={classes.inputDetails} xs={12} md={6}>
                    <InputLabel id="pro-langs-inp">Programming Languages</InputLabel>
                    <Select
                        labelId="pro-langs-inp"
                        id="pro-langs"
                        multiple
                        value={progName}
                        onChange={handleProgramChange}
                        input={<OutlinedInput id="select-pro-langs" label="Programming Languages" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {progLangs.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, progName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>

                </FormControl>

                {/* Keywords Select */}
                <FormControl sx={classes.inputDetails} xs={12} md={6}>
                    <InputLabel id="keywords-inp">Keywords</InputLabel>
                    <Select
                        labelId="keywords-inp"
                        id="keywords"
                        multiple
                        value={keyName}
                        onChange={handleKeywordChange}
                        input={<OutlinedInput id="select-keywords" label="Keywords" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {keyLists.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, keyName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained" disabled={progLangs.length === 0 || keyName.length === 0} onClick={handleSubmit}>Submit</Button>
            </Card>

            <Grid my={1}>
                <ResultSet resultList={resultList} />

            </Grid>
        </>

    );
}

function ResultSet({ resultList }) {

    return (
        <Grid>
            {resultList.map((repo, index) => {
                return (
                    <Card key={"card-"+index} sx={{ minWidth: 275 }} variant="outlined" item spacing={1} style={{ margin: "1% 0" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <Typography style={{ display: "flex" }}>{repo.owner_name}</Typography>
                            </Typography>
                            <a href={repo.github_repo_url}>

                                <Link variant="h5" component="div">
                                    <Typography> <GitHubIcon />  {repo.owner_repo_name} </Typography>
                                </Link>

                            </a>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <div style={{ display: "flex" }} >
                                    <Typography m={1} sx={{ display: "flex" }} variant="subtitle2"><StarIcon fontSize="small" /> {bull} {repo.count_of_stars}</Typography>
                                    <Typography m={1} sx={{ display: "flex" }} variant="subtitle2"><CommitIcon fontSize="small" /> {bull} {repo.count_commits}</Typography>
                                    <Typography m={1} sx={{ display: "flex" }} variant="subtitle2"><Groups3Icon fontSize="small" /> {bull} {repo.count_contributions}</Typography>

                                    <Typography m={1} sx={{ display: "flex" }} variant="subtitle2"><TerminalIcon fontSize="small" /> {bull} {repo.primary_language_name}</Typography>

                                    <Typography m={1} sx={{ display: "flex" }} variant="subtitle2"><LocalPoliceIcon fontSize="small" /> {bull} {repo.license_name}</Typography>
                                    <Typography m={1} sx={{ display: "flex" }} variant="subtitle2"> Created {bull} {repo.repo_created_day}</Typography>
                                </div>
                            </Typography>
                            <Typography variant="body2">
                                {repo.repo_description}
                                <br />
                                '{repo.organization_bio}'
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={repo.github_repo_url}>Learn More</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </Grid>
    )
}

function ActionGrid() {
    return (
        <>
            <FromSection></FromSection>
        </>
    )
}

export default ActionGrid;