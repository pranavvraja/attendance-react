import { Card, CardActions, CardContent, Button } from "@mui/material";
import { CheckCircle, Cancel, Block } from "@mui/icons-material";

function SubCard() {
  return (
    <div>
      <Card className="m-5 p-2 w-5/6 shadow-2xl">
        <CardContent className="text-center font-serif">
          <h2 className="text-2xl">Subject Title</h2>
          <p className="text-l">Class Time</p>
        </CardContent>
        <CardActions className="m-1 justify-evenly mx-20">
          <Button variant="contained" color="success">
            <CheckCircle />
          </Button>
          <Button variant="contained" color="error">
            <Cancel />
          </Button>
          <Button variant="contained" color="warning">
            <Block />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SubCard;
