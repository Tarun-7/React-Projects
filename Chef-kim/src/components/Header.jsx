import chefLogo from "../assets/chef-kim.jpg"

export default function Header() {
    return (
        <header>
            <img src={chefLogo}/>
            <h1>Chef Kim</h1>
        </header>
    )
}