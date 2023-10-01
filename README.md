# Capital Placement Task 1

This is a quick explanation of the code to make it easier for you to review it

## 📝 Content

-   Components
-   Logic
-   Important notes

### 🧩 Components

![Components](https://i.ibb.co/LPyLpmq/components.png)

### 🧠 Logic

In order to manage the state of this applications I used 3 context

-   **ProfileContext**
-   **PersonalInformationContext**
-   **AditionalContext** (manages both cover image and customizedQuestions, I know not the best thing to do but spliting them is not any better)

Each context uses `useReducer()` to manage the state

#### API

```http
    PUT/ request
```

For put request, I created a custom hook called `useData()` that takes `updateServer(data)` function and run it everytime any of the 3 states changes passing `data` parameter which is of type `ApplicationForm` resulted from merging all 3 states

```http
    GET/ request
```

For get request, the main `Application` component gets the data, split it, and dispatch it to the contexts

### 📌 Important notes

1. In the figma design `Video` type was required but no data was found for it in the YAML file so I assumed its fields names as

    - `additionalInfo` : `string`
    - `maxDuration` : `number`
    - `maxDurationUnit` : `min` | `sec`

2. One bug in the code is when you add new empty question, it sends the data to backend without sending this question as both `type` and `question` are required, no bad data is sent but it is a useless put request, solving it may require some changes to the structure of the code or more time of thinking but sadly I don't have much time left before the deadline so I have to start with task 2 😥

3. Cover image section had 2 different forms in the **figma design** and the **demo video**, I used the one in the video

4. Some icons may not perfectly match the design, I could have :
    - **Used custom SVGs** (_pros:_ Light, *cons: *Inconsistency with the rest)
    - **Used a bigger library** (_pros:_ Better consistency, _cons:_ Heavy)
      So I took a middle ground and used icons close to it

---

**Last but not least, thanks for this task I REALLY enjoyed doing it** 😊
