import React, { useContext } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { StateContext } from "../context/index";
import { styles } from "../style/Style";
import { USER_QUERY } from "../graphql/Query";
import { USER_ID } from "../constants";
import { Query } from "react-apollo";

export const Profile = () => {
  const { state, dispatch } = useContext(StateContext);
  const filter = localStorage.getItem(USER_ID);

  return (
    <Query query={USER_QUERY} variables={{filter}}>
      {({ loading, error, data }) => {
        console.log(error);
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        const user = data.feedUser.user;

        console.log(user);

        return (
          <React.Fragment>
            <div style={styles.layout}>
              <main>
                <Paper elevation={10} style={styles.chosenArticlePaper}>
                  <div style={styles.choseArticleContent}>
                    <Typography
                      component="h1"
                      variant="title"
                      color="primary"
                      gutterBottom
                    >
                      Email: {user.email}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      gutterBottom
                    >
                      Links: You created {user.links ? user.links.length : 0} links.
                    </Typography>
                  </div>
                </Paper>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    dispatch({ type: "setProfile", profile: false });
                  }}
                >
                  Done
                </Button>
              </main>
            </div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};