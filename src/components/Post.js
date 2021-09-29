import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class Posts extends Component {
    state={
        posts:[]
    }
    fetchPost=()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                this.setState(
                    {
                        posts:response.data
                    }
                )

            }
        )
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Button
                    onClick={this.fetchPost}
                    color="primary"
                    
                    variant="contained"
                    fullWidth>
                        Get Posts
                        

                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Post Title</TableCell>
                                    <TableCell>Post Body</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.posts.map((value,index)=>{
                                    return  <TableRow>
                                    <TableCell>{value.title}</TableCell>
                                    <TableCell>{value.body}</TableCell>
                                </TableRow>
                                })}
                               
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    

                    </Grid>
            </Grid>
          
        )
    }
}
