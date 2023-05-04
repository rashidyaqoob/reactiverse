import './SubscriptionForm.scss'

const Subscriptionform = () => {

    return (
        <>
            <h2 class="form-title">Subscribe</h2>
            <form className="subscribe-form">
                <input type="email" placeholder='Email' name='email' class="subscribe-form__email"/>
                <button type="submit" class="subscribe-form__btn">Subscribe</button>
            </form>
        </>
    )
}

export default Subscriptionform;