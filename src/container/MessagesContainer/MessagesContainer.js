import React from 'react'
import MessageList from '../../components/MessageList/MessageList'
import Message from '../../components/Message/Message'

const MessageContainer = props => {

    return (
        <section class="messages-page">
			<div class="container">
				<div class="messages-sec">
					<div class="row">
						<MessageList />
                        <Message />
						</div>
				</div>
			</div>
		</section>
    )
}

export default MessageContainer