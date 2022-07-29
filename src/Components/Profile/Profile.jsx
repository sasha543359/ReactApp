import React from "react";
import Post from '../Post/Post'

function Profile(props){

 let addpost = ()=> {alert("ewjbgiuwbgw")};

    return(
        <div>
            <Post Message="Hi Gazpacho you are very cool" Name="Alberto" Image="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
            <Post Message= "Hi Alberto. Thanks !" Name="Gazpacho from España" Image="https://images.hdqwalls.com/wallpapers/bthumb/thor-love-and-thunder-5k-wd.jpg"/>
                  
        </div>
    );
}

export default Profile