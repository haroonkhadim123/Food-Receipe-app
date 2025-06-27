async function getfood() {
    const query = document.querySelector('#query').value;
    const favor = document.querySelector('.favorite');
    // const content=document.querySelector('.content');
    const container = document.querySelector('.receipe-container');
    // const button=document.querySelector('show');
    // const card=document.querySelector('.card');


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;


    if (query === '') {
        container.innerHTML = "Please Enter Movie Name";
        return;

    }
    container.textContent = 'loading...';
    // container.innerHTML='';/

    try {
        // container.innerHTML='loading...'
        const respond = await fetch(url);
        const data = await respond.json();
        if (!data.meals) {
            container.innerHTML = "Receipe is not found";
        }
        container.textContent = '';
        favor.textContent = '';

        data.meals.forEach(Meal => {
            container.innerHTML += ` <div class="card">
            <div class="image">
                <img src="${Meal.strMealThumb}" alt="" width="300px">
                <h2>${Meal.strMeal}</h2>
            </div>
            <div class="content">
                <p><b>StrCategory:</b>${Meal.strCategory}</p>
                <p><b>StrArea:</b>${Meal.strArea}</p>
                <p><b>StrInstruction:</b>${Meal.strInstructions}</p>

                            
 <button class="close">close</button>

            </div>
             <button class="show-more">Show more</button>

        </div>`

            const card = document.querySelectorAll('.card');
            card.forEach(item => {
                const content = item.querySelector('.content');
                const btn = item.querySelector('.show-more');
                const closeBtn = item.querySelector('.close');

                btn.addEventListener('click', () => {
                    content.classList.add('content-show');
                });
                closeBtn.addEventListener('click', () => {
                    content.classList.remove('content-show');
                });


            })





        });

    } catch (error) {
        container.innerHTML = "Error in fetching Receipe.Please Tryagain...."
        console.log('error', error)


    }



}