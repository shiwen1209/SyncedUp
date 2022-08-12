# SyncedUp

SyncedUp is a clone of LinkedIn, a social media application that allows profesionals to connect with other to branch out their network, showcase their profile and experiences, share updates on their profesional lives and follow other's updates. 

[Live site](https://syncedup1.herokuapp.com/#/)

# Functionality and MVPs

* User authentication and sign up
* User profile including general intro, profesional experiences and education
* Feed, including posts, comments and likes 
* Connections 
* Search
* Live chat for both one-on-one and group messaging

# Technologies Used

* Hosting & Server: Heroku, AWS S3, Redis
* Backend: Ruby on Rails, PostgreSQL, Action Cable, Active Storage
* Frontend: Javascript, React, Redux

 # Features
 ## Posts, comments, replies and likes
 * User can create a post and upload an image with the post
 * User can see posts from all of their connections
 * User can comment on the posts
 * User can like a post or a comment 
 
![syncedup_post_part1_AdobeExpress (1)](https://user-images.githubusercontent.com/39010644/184062647-c27e1f6f-5ab7-49f0-9ad8-f08f947b56c5.gif)

```js
    handleUpdate(field){
        return (e)=> this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const {processForm, closeModal, post} = this.props
        const formData = new FormData();
        if (this.state.photoFile){
            formData.append('post[image]', this.state.photoFile);
        }
        formData.append('post[body]', this.state.body);
        formData.append('post[author_id]', this.state.authorId);
        processForm(formData, post.id)
        closeModal();
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, imageUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
```

 ## Live chat
 * User can have one-one-one live chat with another user or live group chat with other users <br />

https://user-images.githubusercontent.com/39010644/184272218-a51552d4-778a-4dad-a97e-d8f8db83c7f6.mov

```js
class RoomsChannel < ApplicationCable::Channel
  def self.online_users(room)
    ActionCable.server.connections.filter_map do |conn| 
      conn.rooms.include?(room) && conn.current_user
    end.uniq
  end

  def subscribed
    @room = Room.find_by(id: params[:id])
    rooms << @room
    stream_for @room

    self.class.broadcast_to @room, 
      type: 'RECEIVE_ROOM_USER',
      user: current_user.slice(:id, :email, :first_name, :last_name) #need to update
  end

  def unsubscribed
    rooms.delete(@room)

    self.class.broadcast_to @room, 
      type: 'REMOVE_ROOM_USER',
      id: current_user.id
  end
end

```


 
