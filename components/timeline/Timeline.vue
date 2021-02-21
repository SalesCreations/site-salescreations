<template>
  <div class="timeline">
    <div class="timeline-item" date-is="20-07-1990">
      <h1>Hello, 'Im a single div responsive timeline without mediaQueries!</h1>
      <p>
        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best
        placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they
        really so different? I think the only card she has is the Lorem card.
      </p>
    </div>

    <div class="timeline-item" date-is="20-07-1990">
      <h1>Oeehhh, that's awesome.. Me too!</h1>
      <p>
        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best
        placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they
        really so different? I think the only card she has is the Lorem card.
      </p>
    </div>

    <div class="timeline-item" date-is="20-07-1990">
      <h1>I'm ::last-child so my border fades ^__^</h1>
      <p>
        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best
        placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they
        really so different? I think the only card she has is the Lorem card.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
}
</script>

<style>
.timeline-item {
  padding: 3em 2em 2em;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  border-left: 2px solid rgba(0, 0, 0, 0.3);
}
.timeline-item p {
  font-size: 1rem;
}
.timeline-item::before {
  content: attr(date-is);
  position: absolute;
  left: 2em;
  font-weight: bold;
  top: 1em;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.785rem;
}
.timeline-item::after {
  width: 10px;
  height: 10px;
  display: block;
  top: 1em;
  position: absolute;
  left: -6px;
  border-radius: 10px;
  content: '';
  background: gray;
}
.timeline-item:last-child {
  border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0)) 1 100%;
}
</style>
