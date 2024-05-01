"use client"
import React from 'react'

const page = () => {
    const [workout, setWorkout] = React.useState<any>(null)


    const getworkout = async () => {
        let data: any = {
            type: 'chest',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            durationInMin: 30,
            excersices: [
                {
                    excersice: 'Flat Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'It primarily targets the pectoralis major muscles, along with engaging the anterior deltoids and triceps. By lying flat on the bench and pushing the weight upwards from the chest, this compound movement helps build upper body strength and muscle mass in the chest region.'
                },
                {
                    excersice: 'Incline Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif', 
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: ' This variation targets the upper portion of the chest muscles, emphasizing the clavicular head of the pectoralis major, while also engaging the anterior deltoids and triceps. By adjusting the bench angle to incline, this exercise helps develop upper chest strength and definition, enhancing overall upper body symmetry and power.'
                },
                {
                    excersice: 'Decline Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'This movement primarily targets the lower portion of the pectoralis major muscles, while also engaging the anterior deltoids and triceps. By positioning the body at a decline angle, this exercise emphasizes the lower chest muscles, promoting balanced chest development and overall upper body strength.'
                },
                {
                    excersice: 'Cable Crossover',
                    videoUrl: 'https://gymvisual.com/img/p/4/8/8/8/4888.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'By grasping handles attached to the pulleys, the individual stands in the center, with arms extended out to the sides. The movement involves bringing the handles together in front of the body in a controlled motion, crossing them over the chest. This exercise effectively targets the pectoralis major muscles while engaging the anterior deltoids and triceps as stabilizers. It offers a versatile way to work on chest muscle balance and strength through a wide range of motion.'
                },
            ]
        }
        setWorkout(data)
    }
    React.useEffect(() => {
        getworkout()
    }, [])
  return (
    <div className='workout'>
        <h1 className='mainhead1'> {workout?.type}Day1</h1>
        <div className='workout_excersices'>

        {
            workout?.excersices.map((item:any, index: number) => {
                return (
                    <div className={
                        index % 2 === 0 ? 'workout_excersice' : 'workout_excersices workout__excercise--reverse'
                    }>
                        
                        <h3>{index+1}</h3>
                        <div className='workout_excersices__image'>
                            <img src={item.videoUrl} alt="" />
                        </div>
                        <div className='workout_excersice__content'>
                            <h2>{item.excersice}</h2>
                            <span>{item.sets} sets X {item.reps} reps</span>
                            <p>{item.description}</p>
                        </div>
                        
                         </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default page